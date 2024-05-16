import {expandAnimation} from '@src/animation';
import {reviewBookingMock} from '@src/mock/mock';
import {generalColor} from '@src/theme/color';
import {row, rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {
  FlatList,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListReview = ({hotel, reviews = reviewBookingMock, style = {}}) => {
  const [childHeight, setChildHeight] = useState(0);
  const [visible, setChildrenVisible] = useState(false);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          paddingVertical: 8,
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          flexDirection: 'row',
          ...style,
        }}>
        <Avatar.Image size={40} source={{uri: 'https://picsum.photos/200'}} />
        <View style={{flex: 1, paddingLeft: 12}}>
          <View style={row}>
            <Text
              style={{...textStyle.h[4], flex: 1, color: generalColor.primary}}>
              Savanah Nguyen
            </Text>
            <AntDesign
              name="star"
              color={generalColor.other.star}
              size={20}></AntDesign>
          </View>

          <Text style={{marginBottom: 4}}>
            {new Date().toLocaleDateString('vi-VN', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
          <Text style={styles.content}>{item.description}</Text>
          <View style={rowCenter}>
            <AntDesign
              name="like2"
              color={generalColor.primary}
              size={18}></AntDesign>
            <Text style={{fontSize: 15, color: generalColor.primary}}>
              {' '}
              Hữu ích (12)
            </Text>
          </View>
          {item.children && item.children.length > 0 && (
            <View style={{marginTop: 4}}>
              <Pressable
                onPress={() => {
                  setChildrenVisible(!visible);
                  LayoutAnimation.configureNext(expandAnimation);
                }}>
                <Text style={{fontSize: 15, color: generalColor.primary}}>
                  {' '}
                  Xem bình luận phản hồi
                </Text>
              </Pressable>
              {visible && (
                <View>
                  {item.children.map(i => {
                    return <ChildrenReview item={i}></ChildrenReview>;
                  })}
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={styles.flatList}
        data={reviews}
        nestedScrollEnabled
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ListReview;
const ChildrenReview = ({item}) => {
  return (
    <View
      style={{
        paddingVertical: 8,
        flexDirection: 'row',
      }}>
      <Avatar.Image size={40} source={{uri: 'https://picsum.photos/200'}} />
      <View style={{flex: 1, paddingLeft: 12}}>
        <View style={row}>
          <Text
            style={{...textStyle.h[4], flex: 1, color: generalColor.primary}}>
            Savanah Nguyen
          </Text>
        </View>

        <Text style={{marginBottom: 4}}>
          {new Date().toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <Text style={styles.content}>{item.description}</Text>
        <View style={rowCenter}>
          <AntDesign
            name="like2"
            color={generalColor.primary}
            size={18}></AntDesign>
          <Text style={{fontSize: 15, color: generalColor.primary}}>
            {' '}
            Hữu ích (12)
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    height: '20%',
  },
  content: {
    color: 'black',
    fontSize: 15,
    marginBottom: 8,
  },
  separator: {
    marginVertical: 4,
  },
});
