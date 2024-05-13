import messaging from '@react-native-firebase/messaging';
import {requestPostNotificationPermission} from '@src/permission';
import {
  getMessagingToken,
  handleOnNotificationOpenedApp,
} from '@src/services/messaging';
import {addActionListener} from '@src/services/notifee';
import {useCallback} from 'react';

const useNotification = () => {
  const setIsBgNotificationEnable = useCallback(isEnabled => {
    Notification.enable = isEnabled;
  }, []);

  const handleIncomingNotification = useCallback(async remoteMessage => {
    // Handle incoming notification
  }, []);

  const enableNotifications = () => {
    requestPostNotificationPermission();
    addActionListener({
      // Add your action listeners here
    });

    handleOnNotificationOpenedApp();

    messaging().setBackgroundMessageHandler(handleIncomingNotification);
    const onTokenRefresh = getMessagingToken();
    const unsubscribeRemoteMessaging = messaging().onMessage(
      handleIncomingNotification,
    );
    return () => {
      onTokenRefresh();
      unsubscribeRemoteMessaging();
    };
  };

  return {
    setIsBgNotificationEnable,
    enableNotifications,
  };
};

export default useNotification;
