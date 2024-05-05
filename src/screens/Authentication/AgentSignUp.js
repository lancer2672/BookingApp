import {navigate} from '@src/navigation/NavigationController';
import {generalColor} from '@src/theme/color';
import {rowCenter} from '@src/theme/style';
import textStyle from '@src/theme/text';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
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
const AgentSignUp = () => {
  const [agent, setAgent] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const handleFinish = () => {
    let seconds = 5;
    showMessage({
      message: `Đơn của bạn đã được tạo. Bạn sẽ nhận được phản hồi qua email`,
      type: 'success',
    });
    let interval = setInterval(async () => {
      if (seconds < 0) {
        clearInterval(interval);
        // await agentApi
        navigate('SignIn');
      }
    }, 1000);
  };
  const handleNext = values => {
    setAgent(prev => ({...prev, ...values}));
    setCurrentStep(prev => prev + 1);
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

      <View style={[rowCenter, {marginVertical: 12}]}>
        <View style={styles.sep}></View>

        <View style={styles.sep}></View>
      </View>
      <PersonalInfoPage
        onNext={values => {
          handleNext(values);
          handleFinish();
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
