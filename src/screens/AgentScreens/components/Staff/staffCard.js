import ButtonComponent from '@src/components/Button';
import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const StaffCard = ({staff}) => {
//   const navigateToDetail = () => {
//     navigate('ListRoom', hotels);
//   };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginLeft: 20,
          color: generalColor.primary,
          marginTop: 20,
        }}>
        {staff.name}
      </Text>
      <Text style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
        {staff.phone}
      </Text>
      <ButtonComponent
        style={styles.delete}
        text="Chi tiết"
        onPress={()=>{}}></ButtonComponent>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    paddingBottom: 20,
    backgroundColor: '#F2F5FA',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
    borderRadius: 20,
  },
  delete: {
    width: '30%',
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: generalColor.primary,
    borderRadius: 15,
  },
});
export default StaffCard;
