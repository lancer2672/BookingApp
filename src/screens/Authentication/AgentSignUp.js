import authApi from '@src/api/auth';
import LoadingModal from '@src/components/LoadingModal/LoadingModal';
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
  const [isLoading, setIsloading] = useState(false);

  const handleFinish = async values => {
    console.log('click');
    try {
      setIsloading(true);
      await authApi.registerAgent(values);
      let seconds = 5;
      showMessage({
        message: `Đơn của bạn đã được tạo. Bạn sẽ nhận được phản hồi qua email`,
        type: 'success',
      });
      let tm = setTimeout(async () => {
        if (seconds < 0) {
          clearTimeout(tm);
          // await agentApi
          navigate('SignIn');
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
      navigate('SignIn');
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
          handleNext(values);
          await handleFinish();
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
