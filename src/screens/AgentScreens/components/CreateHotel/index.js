import ButtonComponent from '@src/components/Button';
import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Animated } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AgentHeader from '../Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import { rowCenter } from '@src/theme/style';

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
  const imageSourceList = [];
  const [imageSource, setImageSource] = useState(null);
  const selectImageFromCamera = () => {
    const options = {
      noData: true,
    };

    launchCamera(options, response => {
      if (response.uri) {
        setImageSource(response.uri);
        imageSourceList.push(response.uri);
      }
    });
  };
  const [imageSource1, setImageSource1] = useState(null);
  const selectImage = () => {
    const options = {
      noData: true,
    };

    launchImageLibrary(options, response => {
      if (response.uri) {
        setImageSource1(response.uri);
        imageSourceList.push(response.uri);
      }
    });
  };
  const renderItem = ({ item }) => <Image source={imageSourceList[item]}></Image>;



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
  const [thamquan, setThamquan] = useState([])
  const handleDeleteThamQuan = (index) => {
    setThamquan((prevItems) => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  }
  //ăn uống 
  const [anuong, setAnuong] = useState([])
  const handleDeleteAnUong = (index) => {
    setAnuong((prevItems) => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  }
  //di chuyen
  const [dichuyen, setDichuyen] = useState([])
  const handleDeleteDiChuyen = (index) => {
    setDichuyen((prevItems) => {
      const updatedItems = [...prevItems]; // Create a copy
      updatedItems.splice(index, 1); // Remove the item
      return updatedItems;
    });
  }
  //animation

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
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
        <View style={{ width: "50%" }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome5 name='water' size={20} style={{ textAlign: "center", width: 30 }}></FontAwesome5>
            <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10, width: "70%" }}>Hồ bơi</Text>
            <Checkbox
              status={checkboxes.option1 ? 'checked' : 'unchecked'}
              label="Option 1"
              onPress={() => handleCheckboxChange('option1', !checkboxes.option1)}
              color='#18C0C1'
              style={styles.checkbox}
              borderColor="#18C0C1"
              borderWidth={1}
              height={35}
              width={35}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome5 name='wifi' size={20} style={{ textAlign: "center", width: 30 }}></FontAwesome5>
            <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10, width: "70%" }}>Wifi miễn phí</Text>
            <Checkbox
              status={checkboxes.option2 ? 'checked' : 'unchecked'}
              label="Option 2"
              onPress={() => handleCheckboxChange('option2', !checkboxes.option2)}
              color='#18C0C1'
              style={styles.checkbox}
              borderColor="#18C0C1"
              borderWidth={1}
              height={35}
              width={35}
            />
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 }}>
            <FontAwesome5 name='car' size={20} style={{ textAlign: "center", width: 30 }}></FontAwesome5>
            <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10, width: "70%" }}>Chỗ để xe riêng</Text>
            <Checkbox
              status={checkboxes.option3 ? 'checked' : 'unchecked'}
              label="Option 3"
              onPress={() => handleCheckboxChange('option3', !checkboxes.option3)}
              color='#18C0C1'
              style={styles.checkbox}
              borderColor="#18C0C1"
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
          <View style={{ marginTop: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                textAlign: 'center',
              }}><AntDesign
                name="caretright"
                color="#18C0C1"
                size={15}
              ></AntDesign> Tham quan
            </Text>
            <Pressable onPress={() => { setThamquan([...thamquan, "New"]) }}>
              <Ionicons
                name="add"
                color="#18C0C1"
                size={32}
              ></Ionicons>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                <AntDesign name='delete' size={30} color="tomato" onPress={() => handleDeleteThamQuan(index)} style={styles.delete}></AntDesign>

              </View>
            ))
            }
          </View>
        </View>

        <View>
          <View style={{ marginTop: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                textAlign: 'center',
              }}><AntDesign
                name="caretright"
                color="#18C0C1"
                size={15}
              ></AntDesign> Ăn uống
            </Text>
            <Pressable onPress={() => { setAnuong([...anuong, "New"]) }}>
              <Ionicons
                name="add"
                color="#18C0C1"
                size={32}
              ></Ionicons>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                <AntDesign name='delete' size={35} color="tomato" onPress={() => handleDeleteAnUong(index)} style={styles.delete}></AntDesign>

              </View>
            ))
            }
          </View>
        </View>


        <View>
          <View style={{ marginTop: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                textAlign: 'center',

              }}>
              <AntDesign
                name="caretright"
                color="#18C0C1"
                size={15}
              ></AntDesign> Di chuyển
            </Text>
            <Pressable onPress={() => { setDichuyen([...dichuyen, "New"]) }}>
              <Ionicons
                name="add"
                color="#18C0C1"
                size={32}
              ></Ionicons>
            </Pressable>
          </View>
          <View style={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                <AntDesign name='delete' size={35} color="tomato" onPress={() => handleDeleteDiChuyen(index)} style={styles.delete}></AntDesign>

              </View>
            ))
            }
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
        <View style={styles.buttonImage}>
          <ButtonComponent
            title="Chụp ảnh"
            onPress={selectImageFromCamera}
            style={styles.buttonItem}
            text="Chụp Ảnh"
          />
          <ButtonComponent
            title="Chọn ảnh"
            onPress={selectImage}
            style={styles.buttonItem}
            text="Chọn Ảnh"
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={imageSource}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imagelist}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <ButtonComponent
        onPress={() => { }}
        style={{
          width: '70%',
          marginLeft: '15%',
          backgroundColor: '#18C0C1',
          marginTop: '20%',
          height: 50,
          borderRadius: 20,
        }}
        text="Thêm khách sạn"
      />
    </View>
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
    backgroundColor: '#18C0C1',
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
    backgroundColor: '#18C0C1',
    width: 140,
    marginRight: 10,
    marginLeft: 10,
    height: 40,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#F2F5FA',
    borderColor: '#18C0C1',
    borderWidth: 1,
    borderRadius: 0
  },
  delete: {
    position: 'absolute',
    width: '20%',
    bottom: 8,
    right: -30,
    zIndex: 99,
  }
});
