import ButtonComponent from '@src/components/Button';
import { ProvinceModal } from '@src/components/LocationModal/LocationModal';
import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Checkbox } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AgentHeader from '../Header';
import { generalColor } from '@src/theme/color';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';

const CreateHotel = () => {
  const [value, setValue] = useState('');
  // useEffect(() => {
  //     handleShowMessage();
  // }, []);
  // const handleShowMessage = () => {
  //     showMessage({
  //         message: 'Cập nhật thất bại',
  //         type: 'danger',
  //     });
  // };
  const [field, setField] = useState('');
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);

  const selectImages = () => {
    const options = {
      noData: true,
      mediaType: 'photo',
      multiple: false,
    };

    return launchImageLibrary(options, response => {
      if (response.assets) {
        return response.assets[0];
      }
      return null;
    });
  };
  const renderItem = ({ item }) => <Image source={images[item]}></Image>;

  //checkbox
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const handleCheckboxChange = (name, value) => {
    setCheckboxes({ ...checkboxes, [name]: value });
  };

  //tham quan
  const [thamquan, setThamquan] = useState([]);
  const handleDeleteThamQuan = index => {
    setThamquan(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  };
  //ăn uống
  const [anuong, setAnuong] = useState([]);
  const handleDeleteAnUong = index => {
    setAnuong(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  };
  //di chuyen
  const [dichuyen, setDichuyen] = useState([]);
  const handleDeleteDiChuyen = index => {
    setDichuyen(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  };
  //animation

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <AgentHeader
        active="TẠO KHÁCH SẠN"
        detail="Chúng tôi sẽ đem về cho bạn những     - khách hàng tiềm năng -"></AgentHeader>
      <Text
        style={{
          fontSize: 18,
          width: '90%',
          marginLeft: '5%',
          marginTop: 10,
          marginBottom: -5,
          fontWeight: 'bold',
        }}>
        * THÔNG TIN CHUNG KHÁCH SẠN
      </Text>
      <View style={styles.container}>
        <TextInputComponent
          placeholder="Tên Hotel ..."
          value={value}
          widthTextInput={'80%'}
          heightTextInput={40}
          onChangeText={text => {
            setValue(text);
          }}
          marginBottom={0}
          styleTextInput={[
            {
              maxWidth: '100%',
            },
            textStyle.h[5],
          ]}
          style={styles.textinput}
          placeholderColor="black"
        />
        <View style={styles.location}>
          <TextInputComponent
            placeholder="Vị trí ..."
            value={value}
            widthTextInput={'80%'}
            heightTextInput={40}
            onChangeText={text => {
              setValue(text);
            }}
            marginBottom={0}
            styleTextInput={[
              {
                maxWidth: '100%',
              },
              textStyle.h[5],
            ]}
            style={styles.textinput}
            placeholderColor="black"
          />
          <ButtonComponent
            style={styles.buttonLocation}
            text="MAP"></ButtonComponent>
        </View>
        <TextInputComponent
          placeholder="Chọn tỉnh"
          value={value}
          editable={false}
          onPress={() => {
            setProvinceVisible(true);
          }}
          widthTextInput={'80%'}
          heightTextInput={40}
          onChangeText={text => {
            setValue(text);
          }}
          marginBottom={0}
          styleTextInput={[
            {
              maxWidth: '100%',
            },
            textStyle.h[5],
          ]}
          style={styles.textinput}
          placeholderColor="black"
        />
        <TextInputComponent
          placeholder="Mô tả ..."
          value={value}
          widthTextInput={'80%'}
          heightTextInput={40}
          onChangeText={text => {
            setValue(text);
          }}
          marginBottom={0}
          styleTextInput={[
            {
              maxWidth: '100%',
            },
            textStyle.h[5],
          ]}
          style={styles.textinput}
          placeholderColor="black"
        />
        <Text
          style={{
            fontSize: 18,
            width: '90%',
            marginTop: 10,
            marginBottom: -5,
            fontWeight: 'bold',
          }}>
          * CÁC TIỆN NGHI KHÁCH SẠN
        </Text>
        <View style={{ width: '50%' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <FontAwesome5
              name="water"
              size={20}
              style={{ textAlign: 'center', width: 30 }}></FontAwesome5>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                marginRight: 10,
                width: '70%',
              }}>
              Hồ bơi
            </Text>
            <Checkbox
              status={checkboxes.option1 ? 'checked' : 'unchecked'}
              label="Option 1"
              onPress={() =>
                handleCheckboxChange('option1', !checkboxes.option1)
              }
              color={generalColor.primary}
              style={styles.checkbox}
              borderColor={generalColor.primary}
              borderWidth={1}
              height={35}
              width={35}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <FontAwesome5
              name="wifi"
              size={20}
              style={{ textAlign: 'center', width: 30 }}></FontAwesome5>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                marginRight: 10,
                width: '70%',
              }}>
              Wifi miễn phí
            </Text>
            <Checkbox
              status={checkboxes.option2 ? 'checked' : 'unchecked'}
              label="Option 2"
              onPress={() =>
                handleCheckboxChange('option2', !checkboxes.option2)
              }
              color={generalColor.primary}
              style={styles.checkbox}
              borderColor={generalColor.primary}
              borderWidth={1}
              height={35}
              width={35}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <FontAwesome5
              name="car"
              size={20}
              style={{ textAlign: 'center', width: 30 }}></FontAwesome5>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                marginRight: 10,
                width: '70%',
              }}>
              Chỗ để xe riêng
            </Text>
            <Checkbox
              status={checkboxes.option3 ? 'checked' : 'unchecked'}
              label="Option 3"
              onPress={() =>
                handleCheckboxChange('option3', !checkboxes.option3)
              }
              color={generalColor.primary}
              style={styles.checkbox}
              borderColor={generalColor.primary}
              borderWidth={1}
              height={35}
              width={35}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            width: '90%',
            marginTop: 10,
            marginBottom: -5,
            fontWeight: 'bold',
          }}>
          * XUNG QUANH KHÁCH SẠN
        </Text>

        <View>
          <View
            style={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                textAlign: 'center',
              }}>
              <AntDesign
                name="caretright"
                color={generalColor.primary}
                size={15}></AntDesign>{' '}
              Tham quan
            </Text>
            <Pressable
              onPress={() => {
                setThamquan([...thamquan, 'New']);
              }}>
              <Ionicons name="add" color={generalColor.primary} size={32}></Ionicons>
            </Pressable>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {thamquan.map((item, index) => (
              <View style={styles.location}>
                <TextInputComponent
                  placeholder="Địa chỉ tham quan ..."
                  value={value}
                  widthTextInput={'80%'}
                  heightTextInput={20}
                  onChangeText={text => {
                    setValue(text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
                <AntDesign
                  name="delete"
                  size={30}
                  color="tomato"
                  onPress={() => handleDeleteThamQuan(index)}
                  style={styles.delete}></AntDesign>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                textAlign: 'center',
              }}>
              <AntDesign
                name="caretright"
                color={generalColor.primary}
                size={15}></AntDesign>{' '}
              Ăn uống
            </Text>
            <Pressable
              onPress={() => {
                setAnuong([...anuong, 'New']);
              }}>
              <Ionicons name="add" color={generalColor.primary} size={32}></Ionicons>
            </Pressable>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {anuong.map((item, index) => (
              <View style={styles.location}>
                <TextInputComponent
                  placeholder="Địa chỉ ăn uống ..."
                  value={value}
                  widthTextInput={'80%'}
                  heightTextInput={20}
                  onChangeText={text => {
                    setValue(text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
                <AntDesign
                  name="delete"
                  size={30}
                  color="tomato"
                  onPress={() => handleDeleteAnUong(index)}
                  style={styles.delete}></AntDesign>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 12,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                textAlign: 'center',
              }}>
              <AntDesign
                name="caretright"
                color={generalColor.primary}
                size={15}></AntDesign>{' '}
              Di chuyển
            </Text>
            <Pressable
              onPress={() => {
                setDichuyen([...dichuyen, 'New']);
              }}>
              <Ionicons name="add" color={generalColor.primary} size={32}></Ionicons>
            </Pressable>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {dichuyen.map((item, index) => (
              <View style={styles.location}>
                <TextInputComponent
                  placeholder="Bến xe, sân bay ..."
                  value={value}
                  widthTextInput={'80%'}
                  heightTextInput={20}
                  onChangeText={text => {
                    setValue(text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
                <AntDesign
                  name="delete"
                  size={30}
                  color="tomato"
                  onPress={() => handleDeleteDiChuyen(index)}
                  style={styles.delete}></AntDesign>
              </View>
            ))}
          </View>
        </View>

        <Text
          style={{
            fontSize: 18,
            width: '90%',
            marginTop: 10,
            marginBottom: -5,
            fontWeight: 'bold',
          }}>
          * QUY ĐỊNH VÀ CHÍNH SÁCH
        </Text>
        <TextInputComponent
          placeholder="........"
          value={value}
          widthTextInput={'80%'}
          heightTextInput={40}
          onChangeText={text => {
            setValue(text);
          }}
          marginBottom={0}
          styleTextInput={[
            {
              maxWidth: '100%',
            },
            textStyle.h[5],
          ]}
          style={styles.textinput}
          placeholderColor="black"
        />
      </View>
      <View style={styles.imageChose}>
        <Text
          style={{
            fontSize: 15,
            width: '100%',
            marginTop: 10,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          * THÊM HÌNH ẢNH MÌNH HOẠ{' '}
        </Text>
        <View>
          <TouchableOpacity
            onPress={async () => {
              setField(() => 'avatar');
              setVisible(() => true);
            }}
            style={styles.avatar}>
          </TouchableOpacity>
          {images.map((item) => <Image source={{uri: item}}></Image>)}
        </View>

        <ImagePickerModal
          onResult={images => {

            setImages(images)
          }}
          visible={visible}
          onClose={() => setVisible(false)}></ImagePickerModal>
      </View>

      <ButtonComponent
        onPress={() => { }}
        style={{
          width: '70%',
          marginLeft: '15%',
          backgroundColor: generalColor.primary,
          marginTop: '20%',
          height: 50,
          borderRadius: 20,
        }}
        text="Thêm khách sạn"
      />
    </ScrollView>
  );
};

export default CreateHotel;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
  },
  location: {
    position: 'relative',
  },
  buttonLocation: {
    position: 'absolute',
    width: '20%',
    bottom: 8,
    right: 10,
    height: 50,
    zIndex: 99,
    borderRadius: 10,
    backgroundColor: generalColor.primary,
  },
  imageChose: {
    width: '90%',
    marginLeft: '5%',
  },
  separator: {
    width: 10,
  },
  flatList: {
    width: '90%',
    marginLeft: '5%',
    height: '20%',
  },
  buttonImage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 5,
  },
  buttonItem: {
    backgroundColor: generalColor.primary,
    width: 140,
    marginRight: 10,
    marginLeft: 10,
    height: 40,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#F2F5FA',
    borderColor: generalColor.primary,
    borderWidth: 1,
    borderRadius: 0,
  },
  delete: {
    position: 'absolute',
    width: '20%',
    bottom: 8,
    right: -30,
    zIndex: 99,
  },
  avatar: {
    borderRadius: 12,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    height: 120,
    backgroundColor: generalColor.other.lightgray,
  },
});
