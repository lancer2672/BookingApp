import messaging from '@react-native-firebase/messaging';
const getMessagingToken = saveFCMtoken => {
  // Get the device token
  messaging()
    .getToken()
    .then(token => {
      console.log('Messaging Token', token);
      //   saveFCMtoken(token);
    })
    .catch(er => {
      console.log('get messaging token failed', er);
    });

  return messaging().onTokenRefresh(token => {
    // saveFCMtoken(token);
  });
};

const handleOnNotificationOpenedApp = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // switch (remoteMessage.data.type) {
    //   case "post/react": {

    //   }
    // }
  });
};

export {getMessagingToken, handleOnNotificationOpenedApp};
