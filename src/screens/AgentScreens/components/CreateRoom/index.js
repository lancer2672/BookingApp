import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import {goBack} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import roomApi from '@src/api/room';
import { ro } from 'date-fns/locale';
import axios from 'axios';
const CreateRoom = () => {
  const route = useRoute();
  const hotel = route.params;
  const [room, setRoom] = useState({
    name: '',
    price: 0,
    imgList: [],
    amenities: [],
    propertyId: hotel.id
  });
  const handlesSetValue = (index, value) => {
    setRoom({...room, [index]: value});
  };
  const [people, setPeople] = useState(0);
  const [child, setChild] = useState(0);
  const [bed, setBed] = useState(0);

  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  //noithat
  const [tienich, setTienich] = useState([]);
  const handleDeleteTienIch = index => {
    setTienich(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  };
  //select
  const [modalVisible, setModalVisible] = useState(false);
  const [inx, setInx] = useState(0);
  const options = [
    'Điều hoà',
    'Giường thường',
    'Giường King',
    'Ban công',
    'Bồn tắm',
    'Cửa sổ lớn',
  ];

  const handleSelect = (value, index) => {
    setTienich(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems[index] = value; // Remove the item
      return updatedItems;
    });
    setModalVisible(false);
  };
  // const createRoom = async data => {
  //   try {
  //     await roomApi.createRoom(data);
  //     showMessage({
  //       message: `Tao thành công`,
  //       type: 'success',
  //     });
  //   } catch {
  //     showMessage({
  //       message: `Tao thất bại`,
  //       type: 'danger',
  //     });
  //   }
  // };


  const handleCreateRoom = () => {
    const newroom = {
      ...room,
      amenities: tienich,
    };
    setRoom(newroom);
    createRoom(room)
  };
  const buttonTextStyle = {
    backgroundColor: generalColor.primary,
    height: 35,
    width: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: 7,
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          padding: 12,
          marginTop: 12,
          ...rowCenter,
          marginBottom: 12,
          backgroundColor: generalColor.primary,
        }}>
        <Pressable onPress={goBack}>
          <AntDesign name="left" size={24} color="white"></AntDesign>
        </Pressable>
        <Text
          style={{
            textTransform: 'uppercase',
            color: 'white',
            ...textStyle.h[2],
            flex: 1,
            textAlign: 'center',
            marginRight: -30,
            fontFamily: 'serif',
          }}>
          Tạo Phòng
        </Text>
        <Pressable>
          <IconButton icon="bell" size={24} iconColor="white" />
        </Pressable>
      </View>
      <View style={{flex: 1}}>
        <ProgressSteps
          completedStepIconColor={generalColor.primary}
          completedProgressBarColor={generalColor.primary}
          activeStepIconBorderColor={generalColor.primary}
          activeLabelColor={generalColor.primary}>
          <ProgressStep label="Bước 1" nextBtnTextStyle={buttonTextStyle}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 18,
                  width: '90%',
                  marginLeft: '5%',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                * THÔNG TIN CHUNG *
              </Text>
              <View style={styles.container}>
                <TextInputComponent
                  placeholder="Tên phòng ..."
                  value={room.name}
                  widthTextInput={'80%'}
                  heightTextInput={40}
                  onChangeText={text => {
                    handlesSetValue('name', text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      color: 'black',
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
                <TextInputComponent
                  placeholder="Giá phòng ..."
                  value={room.pricePerNight}
                  widthTextInput={'80%'}
                  heightTextInput={40}
                  onChangeText={text => {
                    handlesSetValue('price', text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      color: 'black',
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
                <TextInputComponent
                  placeholder="Chính sách và quy định ..."
                  value={room.policy}
                  widthTextInput={'80%'}
                  heightTextInput={40}
                  onChangeText={text => {
                    handlesSetValue('policy', text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      color: 'black',
                      maxWidth: '100%',
                    },
                    textStyle.h[5],
                  ]}
                  style={styles.textinput}
                  placeholderColor="black"
                />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Bước 2"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}>
            {/* <Text
              style={{
                fontSize: 18,
                width: '90%',
                marginLeft: '5%',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              * SỐ LƯỢNG KHÁCH VÀ GIƯỜNG *
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '70%',
                marginLeft: '15%',
                marginTop: 15,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign
                  name="minuscircleo"
                  size={28}
                  style={{marginRight: 10}}
                  onPress={() => {
                    if (people <= 0) setPeople(0);
                    else setPeople(people - 1);
                  }}></AntDesign>
                <MaterialIcons name="people" size={28}></MaterialIcons>
                <Text style={{fontSize: 20}}> {people}</Text>
                <AntDesign
                  name="pluscircleo"
                  size={28}
                  style={{marginLeft: 10}}
                  onPress={() => {
                    setPeople(people + 1);
                  }}></AntDesign>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name="minuscircleo"
                  size={28}
                  style={{marginRight: 10}}
                  onPress={() => {
                    if (child <= 0) setChild(0);
                    else setChild(child - 1);
                  }}></AntDesign>
                <FontAwesome name="child" size={28}></FontAwesome>
                <Text style={{fontSize: 20}}>{child}</Text>
                <AntDesign
                  name="pluscircleo"
                  size={28}
                  style={{marginLeft: 10}}
                  onPress={() => {
                    setChild(child + 1);
                  }}></AntDesign>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <AntDesign
                name="minuscircleo"
                size={28}
                style={{marginRight: 10}}
                onPress={() => {
                  if (bed <= 0) setBed(0);
                  else setBed(bed - 1);
                }}></AntDesign>
              <Ionicons name="bed" size={28}></Ionicons>
              <Text style={{fontSize: 20}}>{bed}</Text>
              <AntDesign
                name="pluscircleo"
                size={28}
                style={{marginLeft: 10}}
                onPress={() => {
                  setBed(bed + 1);
                }}></AntDesign>
            </View> */}
            <Text
              style={{
                fontSize: 18,
                width: '90%',
                marginLeft: '5%',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 20,
              }}>
              * THÊM TIỆN TÍCH *
            </Text>
            <View style={{width: '90%', marginLeft: '5%'}}>
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
                    fontWeight: 'bold',
                  }}>
                  <AntDesign name="caretright" size={18}></AntDesign> TIỆN ÍCH
                </Text>
                <Pressable
                  onPress={() => {
                    setTienich([...tienich, 'Tiện ích ...']);
                  }}>
                  <Ionicons name="add" size={32}></Ionicons>
                </Pressable>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                {tienich.map((item, index) => (
                  <View style={styles.location}>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(true), setInx(index);
                      }}
                      style={styles.selectButton}>
                      <Text style={styles.selectButtonText}>{item}</Text>
                    </TouchableOpacity>
                    <Modal
                      key={index}
                      animationType="slide"
                      transparent={true}
                      visible={modalVisible}
                      onRequestClose={() => setModalVisible(false)}>
                      <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                          <TouchableOpacity
                            style={styles.closebutton}
                            onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={20}></AntDesign>
                          </TouchableOpacity>
                          {options.map((option, index) => (
                            <TouchableOpacity
                              key={index}
                              style={styles.optionButton}
                              onPress={() => handleSelect(option, inx)}>
                              <Text style={{fontSize: 17}}>{option}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    </Modal>
                    <AntDesign
                      name="delete"
                      size={30}
                      color="tomato"
                      onPress={() => handleDeleteTienIch(index)}
                      style={styles.delete}></AntDesign>
                  </View>
                ))}
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Bước 3"
            onSubmit={handleCreateRoom}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}>
            <View style={styles.imageChose}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  marginTop: 10,
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                * THÊM HÌNH ẢNH MÌNH HOẠ{' '}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={async () => {
                    setVisible(() => true);
                  }}
                  style={styles.avatar}>
                  <Ionicons
                    name="add"
                    size={34}
                    color={generalColor.primary}></Ionicons>
                </TouchableOpacity>
                {images.map(item => (
                  <Image source={{uri: item}} style={styles.imagepick}></Image>
                ))}
              </View>
              <ImagePickerModal
                onResult={image => {
                  setImages([...images, image]);
                  console.log('image', images);
                }}
                visible={visible}
                onClose={() => setVisible(false)}></ImagePickerModal>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};

export default CreateRoom;

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
  location: {
    marginTop: 10,
    position: 'relative',
  },
  selectButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    paddingTop: 40,
    elevation: 5,
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    borderRadius: 12,
    width: '30%',
    alignSelf: 'left',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    height: 120,
    backgroundColor: generalColor.other.lightgray,
  },
  closebutton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
