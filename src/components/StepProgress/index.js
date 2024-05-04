import AntDesign from 'react-native-vector-icons/AntDesign';

import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const CIRCLE_WIDTH = 24;
const HALF_CIRCLE_WIDTH = CIRCLE_WIDTH / 2;

//  type StepItem = {
//   name: string;
//   code: string | number;
// };

//   selectedIndex: number;
//   enableItemClick?: boolean;
//   enablePageScroll?: boolean;
//   steps: StepItem[];
//   children: ReactNode[] | ReactNode;
//   style?: StyleProp<ViewStyle>;
//   onChange: (newSelectedIndex: number) => void;

const StepProgress = ({
  children,
  selectedIndex = 0,
  onChange,
  steps = [],
  style: parentStyle,
  enableItemClick = false,
  enablePageScroll = false,
}) => {
  // Ensure children is always an array
  const childrenArray = Array.isArray(children) ? children : [children];
  const [overlayLineWidth, setOverlayLineWidth] = useState(0);
  const [maxActiveIndex, setMaxActiveIndex] = useState(0);
  const lineWidthAnim = useSharedValue(0);
  const lineWidthFragment =
    overlayLineWidth / (steps.length !== 0 ? steps.length : 1);

  const viewPagerRef = useRef < PagerView > null;

  const handleGetContainerlayout = event => {
    setOverlayLineWidth(event.nativeEvent.layout.width);
  };

  const handlePageSelected = e => {
    onChange(e.nativeEvent.position);
  };

  const handleItemClick = (item, index) => {
    if (!enableItemClick) return;
    //check if has screen at that index
    if (index < childrenArray.length) {
      viewPagerRef.current?.setPage(index);
      onChange(index);
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    width: lineWidthAnim.value,
  }));

  //line animation
  useEffect(() => {
    lineWidthAnim.value = withTiming(lineWidthFragment * selectedIndex, {
      duration: 300,
    });
  }, [overlayLineWidth, selectedIndex]);

  useEffect(() => {
    if (!enablePageScroll) {
      viewPagerRef?.current?.setPage(selectedIndex);
    }
  }, [enablePageScroll, selectedIndex]);

  useAnimatedReaction(
    () => lineWidthAnim.value,
    (data, prevData) => {
      if (prevData != null) {
        runOnJS(setMaxActiveIndex)(Math.floor(data / lineWidthFragment));
      }
    },
  );
  return (
    <View style={{flex: 1}}>
      <View
        onLayout={handleGetContainerlayout}
        style={[{flexDirection: 'row'}, parentStyle]}>
        {steps.map((item, index) => (
          <ProgressItem
            key={`progress-item-${index}`}
            index={index}
            item={item}
            isActive={index < maxActiveIndex}
            isSelected={index === selectedIndex}
            onItemClick={handleItemClick}
          />
        ))}
        <View
          style={[
            itemStyles.lineOverlay,
            {
              //align center
              left: lineWidthFragment / 2,
              width: overlayLineWidth - lineWidthFragment,
            },
          ]}>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              itemStyles.line,
              animatedStyles,
            ]}></Animated.View>
        </View>
      </View>
      <PagerView
        ref={viewPagerRef}
        scrollEnabled={enablePageScroll}
        onPageSelected={handlePageSelected}
        style={{flex: 1}}
        initialPage={selectedIndex}>
        {childrenArray.map((item, index) => (
          <View style={{flex: 1}} key={index}>
            {item}
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default StepProgress;
const BG_COLOR = {
  true: generalColor.primary,
  false: generalColor.white[100],
};

const ProgressItem = ({item, index, isSelected, isActive, onItemClick}) => {
  const opacityAnim = useSharedValue(0.8);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacityAnim.value,
  }));

  const isSelectedOrActive = () => {
    return isActive || isSelected;
  };

  const isActiveAndNotSelected = () => {
    return isActive && !isSelected;
  };

  useEffect(() => {
    const animValue = isActive ? 1 : 0.8;

    opacityAnim.value = withTiming(animValue, {
      duration: 200,
    });
  }, [isActive]);
  const containerAnimStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        isActive ? 1 : 0,
        [0, 1],
        [BG_COLOR.false, BG_COLOR.true],
      ),
    };
  }, [isActive]);
  return (
    <View style={[styles.container]}>
      <View style={rowCenter}>
        <Pressable onPress={() => onItemClick(item, index)}>
          <Animated.View
            style={[
              {
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: isSelectedOrActive()
                  ? generalColor.primary
                  : generalColor.black[50],
                borderWidth: 1.5,
                zIndex: 1,
                width: CIRCLE_WIDTH,
                height: CIRCLE_WIDTH,
                borderRadius: CIRCLE_WIDTH,
              },
              containerAnimStyles,
            ]}>
            {isActiveAndNotSelected() ? (
              <AntDesign
                name="check"
                color={generalColor.primary}
                size={20}></AntDesign>
            ) : (
              <Text
                color={
                  isSelected ? generalColor.primary : generalColor.black[50]
                }
                style={[
                  textStyle.content.small,
                  {lineHeight: 16, textAlign: 'center'},
                ]}>
                {`${index + 1}`}
              </Text>
            )}
          </Animated.View>
        </Pressable>
      </View>
      <Pressable onPress={() => onItemClick(item, index)}>
        <Animated.View style={animatedStyles}>
          <Text
            textAlign="center"
            color={isActive ? generalColor.primary : generalColor.black[100]}
            style={[
              textStyle.content.small,
              {
                lineHeight: 16,
                fontWeight: isSelectedOrActive() ? 'bold' : '500',
                textAlign: 'center',
              },
            ]}
            numberOfLines={2}>
            {item.name}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  line: {
    backgroundColor: generalColor.black[50],
  },
  lineOverlay: {
    marginTop: HALF_CIRCLE_WIDTH,
    height: 1,
    position: 'absolute',
    //subtract the border of the circle
    top: CIRCLE_WIDTH / 2,
    transform: [{translateY: -1}],
    backgroundColor: generalColor.primary,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
  },
  circleContainer: {},
});
