import authApi from '@src/api/auth';
import LoadingModal from '@src/components/LoadingModal/LoadingModal';
import { navigate } from '@src/navigation/NavigationController';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import PersonalInfoPage from './component/PersonalInfoPage';

const steps = [
  {
    name: 'Thông tin cá nhân',
    code: 'CODE_1',
  },
  {
    name: 'Địa chỉ',
    code: 'CODE_2',
  },
];
const random = () => {
  return Math.floor(Math.random() * 1000);
};
async function convertFileToBlob(file) {
  const response = await fetch(file.uri);
  console.log("convert",response);
  const blob = await response.blob();
  return new Blob([blob], { type: file.type });
}

const AgentSignUp = () => {
  const [agent, setAgent] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  const handleFinish = async values => {
    let seconds = 5;
    try {
      setIsloading(true);
      const payload = new FormData();

      payload.append('firstName', values.anotherData.firstName);
      payload.append('lastName', values.anotherData.lastName);
      payload.append('phoneNumber', values.anotherData.phoneNumber);
      payload.append('email', values.anotherData.email);
      payload.append('identityNumber', values.anotherData.identityNumber);
      payload.append('password', values.anotherData.password);
      
      payload.append('selfieImg', {
        uri: values.selfieImg.uri,
        type: values.selfieImg.type,
        name: values.selfieImg.fileName,
      });
      payload.append('frontIdentityCard', {
        uri: values.frontIdentityCard.uri,
        type: values.frontIdentityCard.type,
        name: values.frontIdentityCard.fileName,
      });
      payload.append('backIdentityCard', {
        uri: values.backIdentityCard.uri,
        type: values.backIdentityCard.type,
        name: values.backIdentityCard.fileName,
      });
      console.log('payload', JSON.stringify(payload));
      await authApi.registerAgent(payload);
      navigate('SignIn');
      showMessage({
        message: `Đơn của bạn đã được tạo. Bạn sẽ nhận được phản hồi qua email`,
        type: 'success',
      });
      let tm = setTimeout(async () => {
        if (seconds < 0) {
          clearTimeout(tm);
          // await agentApi
        
        }
      }, 1000);
    } catch (er) {
      console.log(er);
      showMessage({
        message: `Lỗi. vui lòng thử lại sau`,
        type: 'warning',
      });
      let tm = setTimeout(async () => {
        if (seconds < 0) {
          clearTimeout(tm);
          // await agentApi
        }
      }, 1000);
    } finally {
      setIsloading(false);
      // navigate('SignIn');
    }
  };
  const handleNext = async values => {
    await handleFinish(values);
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          textStyle.h[2],
          {
            fontFamily: 'serif',
            color: 'white',
            marginTop: 12,
            marginBottom: 6,
          },
        ]}>
        Đăng Ký Agent
      </Text>
      <Text style={styles.content}>Điền thông tin bên dưới</Text>
      <LoadingModal
        onClose={() => {
          setIsloading(false);
        }}
        visible={isLoading}></LoadingModal>

      <View style={[rowCenter, {marginVertical: 12}]}>
        <View style={styles.sep}></View>

        <View style={styles.sep}></View>
      </View>
      <PersonalInfoPage
        onNext={async values => {
          await handleNext(values);
        }}></PersonalInfoPage>
      {/* <StepProgress selectedIndex={currentStep} steps={steps}>
        <PersonalInfoPage onNext={handleNext}></PersonalInfoPage>
        <AddressInfoPage
          onNext={values => {
            handleNext(values);
            handleFinish();
          }}></AddressInfoPage>
      </StepProgress> */}
    </View>
  );
};

export default AgentSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: generalColor.other.darkblue,
  },
  textinput: {
    backgroundColor: undefined,
    borderColor: generalColor.white[50],
    paddingVertical: 4,
    borderWidth: 2,
  },
  sep: {
    backgroundColor: '#666',
    borderRadius: 50,
    height: 2,
    flex: 1,
  },
  content: {
    color: 'white',
  },
});
