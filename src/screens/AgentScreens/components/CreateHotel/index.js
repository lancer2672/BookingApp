import ButtonComponent from '@src/components/Button';
import ImagePickerModal from '@src/components/ImagePickerModal/ImagePickerModal';
import TextInputComponent from '@src/components/TextInputComponent';
import { navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import textStyle from '@src/theme/text';
import { useEffect, useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AgentHeader from '../Header';

const CreateHotel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://54.255.249.131:8080/api/hotel-services')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [hotel, setHotel] = useState({
    name: '',
    address: '',
    description: '',
    ameniteis: [],
    around: {
      visit: [],
      food: [],
      transport: [],
    },
    policy: '',
    images: [],
  });
  const handlesSetValue = (index, value) => {
    setHotel({...hotel, [index]: value});
  };
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);

  //tham quan
  const [thamquan, setThamquan] = useState([]);
  const handleDeleteThamQuan = index => {
    setThamquan(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };
  //ăn uống
  const [anuong, setAnuong] = useState([]);
  const handleDeleteAnUong = index => {
    setAnuong(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };
  //di chuyen
  const [dichuyen, setDichuyen] = useState([]);
  const handleDeleteDiChuyen = index => {
    setDichuyen(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };
  //tiennghi
  const [tiennghi, setTiennghi] = useState([]);
  const handleDeleteTienNghi = index => {
    setTiennghi(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [inx, setInx] = useState(0);
  const options = data;

  const handleSelect = (value, index) => {
    setTiennghi(prevItems => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems[index] = value; // Remove the item
      return updatedItems;
    });
    setModalVisible(false);
  };
  const handleAddHotel = () => {
    const newHotel = {
      ...hotel,
      around: {visit: thamquan, food: anuong, transport: dichuyen},
      ameniteis: tiennghi,
    };
    setHotel(newHotel);
    console.log(hotel);
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
      <AgentHeader active="TẠO KHÁCH SẠN"></AgentHeader>
      <ProgressSteps
        completedStepIconColor={generalColor.primary}
        completedProgressBarColor={generalColor.primary}
        activeStepIconBorderColor={generalColor.primary}
        activeLabelColor={generalColor.primary}>
        <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle}>
          <Text
            style={{
              fontSize: 18,
              width: '100%',
              marginTop: 10,
              marginBottom: -5,
              fontWeight: 'bold',
              textAlign: 'center',
              color: generalColor.primary,
            }}>
            * THÔNG TIN CHUNG KHÁCH SẠN *
          </Text>
          <View style={styles.container}>
            <TextInputComponent
              placeholder="Tên Hotel ..."
              value={hotel.name}
              widthTextInput={'80%'}
              heightTextInput={40}
              onChangeText={text => {
                handlesSetValue('name', text);
              }}
              marginBottom={0}
              styleTextInput={[
                {
                  maxWidth: '100%',
                  color: 'black',
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="black"
            />
            <View
              style={[
                styles.location,
                {alignItems: 'center', flexDirection: 'row'},
              ]}>
              <View style={{flex: 1}}>
                <TextInputComponent
                  placeholder="Vị trí ..."
                  value={hotel.address}
                  heightTextInput={40}
                  onChangeText={text => {
                    handlesSetValue('address', text);
                  }}
                  marginBottom={0}
                  styleTextInput={[
                    {
                      maxWidth: '60%',
                      color: 'black',
                    },
                    textStyle.h[5],
                  ]}
                  style={[styles.textinput, {width: '60%', flex: 1}]}
                  placeholderColor="black"
                />
              </View>
              <View style={{marginTop: 12}}>
                <ButtonComponent
                onPress={()=>{
                  navigate("AgentGGMap")
                }}
                  // style={styles.buttonLocation}
                  text="MAP"></ButtonComponent>
              </View>
            </View>
            <TextInputComponent
              placeholder="Mô tả ..."
              value={hotel.description}
              widthTextInput={'80%'}
              heightTextInput={40}
              onChangeText={text => {
                handlesSetValue('description', text);
              }}
              marginBottom={0}
              styleTextInput={[
                {
                  maxWidth: '100%',
                  color: 'black',
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="black"
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second Step"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <Text
            style={{
              fontSize: 18,
              width: '100%',
              marginTop: 10,
              marginBottom: -5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            * CÁC TIỆN NGHI KHÁCH SẠN *
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
                }}>
                <AntDesign name="caretright" size={15}></AntDesign> Thêm tiện
                nghi
              </Text>
              <Pressable
                onPress={() => {
                  setTiennghi([...tiennghi, 'Tiện nghi ...']);
                }}>
                <Ionicons name="add" size={32}></Ionicons>
              </Pressable>
            </View>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              {tiennghi.map((item, index) => (
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
                    useNativeDriver={true}
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
                            onPress={() => handleSelect(option.name, inx)}>
                            <Text style={{fontSize: 16}}>{option.name}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </Modal>
                  <AntDesign
                    name="delete"
                    size={30}
                    color="tomato"
                    onPress={() => handleDeleteTienNghi(index)}
                    style={styles.delete}></AntDesign>
                </View>
              ))}
            </View>
          </View>
          <Text
            style={{
              fontSize: 18,
              width: '100%',
              marginTop: 20,
              marginBottom: 0,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            * XUNG QUANH KHÁCH SẠN *
          </Text>
          <View style={{width: '90%', marginLeft: '5%', marginBottom: 20}}>
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
                    setThamquan([...thamquan, '']);
                  }}>
                  <Ionicons
                    name="add"
                    color={generalColor.primary}
                    size={32}></Ionicons>
                </Pressable>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}>
                {thamquan.map((item, index) => (
                  <View style={styles.location}>
                    <TextInputComponent
                      placeholder="Địa chỉ tham quan ..."
                      value={item}
                      widthTextInput={'80%'}
                      heightTextInput={20}
                      onChangeText={text => {
                        const update = [...thamquan];
                        update[index] = text;
                        setThamquan(update);
                      }}
                      marginBottom={0}
                      styleTextInput={[
                        {
                          maxWidth: '100%',
                          color: 'black',
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
                    setAnuong([...anuong, '']);
                  }}>
                  <Ionicons
                    name="add"
                    color={generalColor.primary}
                    size={32}></Ionicons>
                </Pressable>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}>
                {anuong.map((item, index) => (
                  <View style={styles.location}>
                    <TextInputComponent
                      placeholder="Địa chỉ ăn uống ..."
                      value={item}
                      widthTextInput={'80%'}
                      heightTextInput={20}
                      onChangeText={text => {
                        const update = [...anuong];
                        update[index] = text;
                        setAnuong(update);
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
                    setDichuyen([...dichuyen, '']);
                  }}>
                  <Ionicons
                    name="add"
                    color={generalColor.primary}
                    size={32}></Ionicons>
                </Pressable>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}>
                {dichuyen.map((item, index) => (
                  <View style={styles.location}>
                    <TextInputComponent
                      placeholder="Bến xe, sân bay ..."
                      value={item}
                      widthTextInput={'80%'}
                      heightTextInput={20}
                      onChangeText={text => {
                        const update = [...dichuyen];
                        update[index] = text;
                        setDichuyen(update);
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
          </View>
        </ProgressStep>
        <ProgressStep
          label="Third Step"
          onSubmit={handleAddHotel}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{width: '90%', marginLeft: '5%', marginBottom: 20}}>
            <Text
              style={{
                fontSize: 18,
                width: '100%',
                marginTop: 10,
                marginBottom: -5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              * QUY ĐỊNH VÀ CHÍNH SÁCH *
            </Text>
            <TextInputComponent
              placeholder="........"
              value={hotel.policy}
              widthTextInput={'80%'}
              heightTextInput={50}
              onChangeText={text => {
                handlesSetValue('policy', text);
              }}
              marginBottom={0}
              styleTextInput={[
                {
                  maxWidth: '100%',
                  color: 'black',
                },
                textStyle.h[5],
              ]}
              style={styles.textinput}
              placeholderColor="black"
            />
            <View style={styles.imageChose}>
              <Text
                style={{
                  fontSize: 18,
                  width: '100%',
                  marginTop: 10,
                  marginBottom: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                * THÊM HÌNH ẢNH MÌNH HOẠ *
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
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default CreateHotel;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
  },
  location: {
    position: 'relative',
  },
  buttonLocation: {
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
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,

    marginTop: 5,
    color: 'black',
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
    width: '30%',
    alignSelf: 'left',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    height: 120,
    backgroundColor: generalColor.other.lightgray,
  },
  selectButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
  },
  selectButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    elevation: 5,
    paddingTop: 40,
  },
  optionButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closebutton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  imagepick: {
    borderRadius: 12,
    width: '30%',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 12,
    alignItems: 'center',
    height: 120,
    backgroundColor: 'red',
  },
});
