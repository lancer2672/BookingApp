import TextInputComponent from '@src/components/TextInputComponent';
import textStyle from '@src/theme/text';
import {MASK_FORMAT} from '@src/utils/textFormat';
import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {showMessage} from 'react-native-flash-message';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AgentHeader from '../components/Header';
const AgentDashboard = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    handleShowMessage();
  }, []);
  const handleShowMessage = () => {
    showMessage({
      message: 'Cập nhật thất bại',
      type: 'danger',
    });
  };

  const [imageSource, setImageSource] = useState(null);

  const selectImageFromCamera = () => {
    const options = {
      noData: true,
    };

    launchCamera(options, response => {
      if (response.uri) {
        setImageSource(response.uri);
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
      }
    });
  };

  return (
    <View>
      <AgentHeader></AgentHeader>
      <Button title="Chụp ảnh" onPress={selectImageFromCamera} />
      {imageSource && (
        <Image source={{uri: imageSource}} style={{width: 200, height: 200}} />
      )}
      <Button title="Chọn ảnh" onPress={selectImage} />
      {imageSource1 && (
        <Image source={{uri: imageSource1}} style={{width: 200, height: 200}} />
      )}
      <AnimatedCircularProgress
        size={220}
        width={10}
        fill={50}
        tintColor="#00e0ff"
        backgroundColor="#3d5875">
        {fill => (
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 60,
                color: 'black',
              }}>
              123
            </Text>
            <Text style={{color: 'black', fontSize: 18}}>PROGRESS</Text>
          </View>
        )}
      </AnimatedCircularProgress>

      <TextInputComponent
        isMask={true}
        mask={MASK_FORMAT.NUMBER}
        value={value}
        heightTextInput={60}
        onChangeText={text => {
          setValue(text);
        }}
        keyboardType={'numeric'}
        marginBottom={0}
        autoFocus
        styleTextInput={[
          {
            maxWidth: '100%',
          },
          textStyle.h[3],
        ]}
      />
    </View>
  );
};

export default AgentDashboard;

const styles = StyleSheet.create({});
