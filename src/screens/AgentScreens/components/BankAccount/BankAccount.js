import { expandAnimation } from '@src/animation';
import AskingModel from '@src/components/AskingModal/AskingModal';
import ButtonComponent from '@src/components/Button';
import { bookingHistoryMock } from '@src/mock/mock';
import { goBack } from '@src/navigation/NavigationController';
import useUserStore from '@src/store/user';
import { generalColor } from '@src/theme/color';
import { rowCenter } from '@src/theme/style';
import textStyle from '@src/theme/text';
import { useEffect, useState } from 'react';
import {
    FlatList,
    LayoutAnimation,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import BankAccountItem from './BankAccountItem';
import CreateNewBank from './CreateNewBank';
import bankApi from '@src/api/bank';
import { create } from 'zustand';
import QRCode from 'react-native-qrcode-svg';

const BankAccount = () => {
  // const {bookingHistory = bookingHistoryMock} = useRoute().params;

  const [defaultId, setDefaultId] = useState(1);
  const [newDefaultId, setNewDefaultId] = useState(1);
  const [askVisible, setAskVisible] = useState(false);
  const [createVisible, setCreateVisible] = useState(false);
  const [account , setAccount] = useState([])
  const user = useUserStore(state => state.user);
  useEffect(()=>{
    bankApi.getList(user.id).then(data=>{
      for (const bankAccount of data.bankAccounts) {
        if(bankAccount.isDefault == true)
            setDefaultId(bankAccount.id)
      }
      setAccount(data.bankAccounts)
      console.log("respose",data);
    }).catch(er=>{
      console.log('err',er.response);
    })
  },[])
  const updateBank = (newDefaultId, defaultId)  => {
    const defaultBank = account.filter(item => item.id == defaultId)
    const updatedefaultBank = {...defaultBank, isDefault: false}
    const newdefaultBank = account.filter(item => item.id == newDefaultId)
    const updatenewdefaultBank = {...newdefaultBank, isDefault: true}
    async function updateDefaultBank() {
      bankApi.updateBank(updatedefaultBank, defaultId).then(data=>{
        console.log("respose",data);
      }).catch(er=>{
        console.log('err',er.response);
      })
    }
    async function updateNewDefaultBank() {
      bankApi.updateBank(updatenewdefaultBank, newDefaultId).then(data=>{
        console.log("respose",data);
      }).catch(er=>{
        console.log('err',er.response);
      })
    }
    updateDefaultBank(defaultId)
    updateNewDefaultBank(newDefaultId)
  }

  const mockAccount = [
    {
      stk: '123123123',
      id: 1,
      bank: 'BIDV',
      createdAt: new Date(),
      accountName: "TRAN QUOC KHANH",
      qr: 'https://picsum.photos/200',
    },
    {
      stk: '123123123',
      id: 2,
      bank: 'AGRIBANK',
      createdAt: new Date(),
      accountName: "TRAN QUOC KHANH",
      qr: 'https://picsum.photos/200',
    },
    {
      stk: '123123123',
      id: 3,
      bank: 'MBV',
      createdAt: new Date(),
      accountName: "TRAN QUOC KHANH",
      qr: 'https://picsum.photos/200',
    },
  ];
  const bookingHistory = bookingHistoryMock;
  const renderItem = ({item, index}) => (
    <BankAccountItem
      onNewDefaultIdChange={id => setNewDefaultId(id)}
      newDefaultId={newDefaultId == item.id}
      onChange={id => setDefaultId(id)}
      isDefault= {item.isDefault}
      item={item}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingBottom: 12}}>
      <View style={{padding: 12, marginTop: 12, ...rowCenter}}>
        <Pressable onPress={goBack}>
          <AntDesign
            name="left"
            size={24}
            color={generalColor.primary}></AntDesign>
        </Pressable>
        <Text style={styles.title}>Ngân Hàng</Text>
        {newDefaultId != defaultId ? (
          <Pressable
            onPress={() => {
              setAskVisible(true);
            }}>
            <Feather
              name="check"
              size={24}
              color={generalColor.primary}></Feather>
          </Pressable>
        ) : (
          <View style={{marginLeft: 24}}></View>
        )}
      </View>

      <View style={{flex: 1}}>
        <FlatList
          renderItem={renderItem}
          data={account}
          keyExtractor={(item, index) => index.toString()}
          showVertical={false}
          ItemSeparatorComponent={() => <View style={{marginVertical: 8}} />}
        />
        <ButtonComponent
          onPress={() => {
            setCreateVisible(true);
          }}
          leftIcon={<AntDesign name="plus" size={24} color={'white'}></AntDesign>}
          style={{marginVertical: 12, marginHorizontal: 12}}
          text={'Thêm tài khoản mới'}></ButtonComponent>
        <AskingModel
          heading="Bạn có muốn thay đổi tài khoản?"
          onYesClick={() => {
            setDefaultId(() => newDefaultId);
            console.log(newDefaultId)
            console.log(defaultId)
            updateBank(newDefaultId, defaultId)
            setAskVisible(false);
            LayoutAnimation.configureNext(expandAnimation);
          }}
          onNoClick={() => {
            setNewDefaultId(() => defaultId);
            setAskVisible(false);
          }}
          noText={'Không'}
          yesText={'Có'}
          visible={askVisible}
          onClose={() => {
            setAskVisible(false);
          }}></AskingModel>
        <CreateNewBank
          account={account}
          onYesClick={() => {}}
          visible={createVisible}
          onClose={() => {
            setCreateVisible(false);
          }}></CreateNewBank>
      </View>
    </View>
  );
};

export default BankAccount;

const styles = StyleSheet.create({
  title: {
    textTransform: 'uppercase',
    color: generalColor.primary,
    ...textStyle.h[2],
    flex: 1,
    textAlign: 'center',

    fontFamily: 'serif',
  },
});
