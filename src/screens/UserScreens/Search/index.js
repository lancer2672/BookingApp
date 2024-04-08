import {ClockSVG, PinSVG} from '@src/assets/icons';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import textStyle from '@src/theme/text';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components';

const UserSearchScreen = () => {
  const theme = useTheme();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          minHeight: 140,
          backgroundColor: generalColor.primary,
          padding: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <PinSVG color={generalColor.white[100]}></PinSVG>
            <Text
              style={{
                textTransform: 'uppercase',
                marginLeft: 12,
                color: generalColor.white[100],
                ...textStyle.content.large,
              }}>
              Địa điểm
            </Text>
          </View>
          <View>
            <AntDesign
              name="close"
              size={24}
              color={generalColor.white[100]}></AntDesign>
          </View>
        </View>
        <Searchbar
          onPressIn={() => navigate('UserSearchDetailScreen')}
          //   onFocus={() => console.log('click')}
          //   editable={false}
          placeholder="Tìm kiếm"
          style={{backgroundColor: 'white', borderRadius: 20}}
        />
      </View>
      <View style={{flex: 1, padding: 20}}>
        <View style={styles.item}>
          <Text
            style={{
              //   color: theme.color.text.primary,
              ...textStyle.content.medium,
            }}>
            Khách sạn và khu nghỉ dưỡng xung quanh bạn
          </Text>
        </View>

        <View style={{marginTop: 12}}>
          <RecentSearches></RecentSearches>
        </View>
      </View>
    </View>
  );
};

const RecentSearches = () => {
  const data = [
    'Quận 2, HCM',
    'Quận 1, HCM',
    'Quận 3, HCM',
    // Thêm các mục tìm kiếm gần đây khác vào đây
  ];

  const renderItem = ({item}) => (
    <Pressable onPress={() => console.log('click')}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <ClockSVG />
        <Text
          style={{
            marginLeft: 12,
            // color: theme.color.text.primary,
            ...textStyle.content.medium,
          }}>
          {item}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{marginTop: 12}}>
      <Text
        style={{
          color: generalColor.primary,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          ...textStyle.content.medium,
        }}>
        Tìm kiếm gần đây
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default UserSearchScreen;

const styles = StyleSheet.create({
  item: {
    marginTop: 4,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
