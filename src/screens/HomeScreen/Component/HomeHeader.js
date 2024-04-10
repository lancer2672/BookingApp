import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from '@src/components/Button';
import Header from '@src/components/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeHeader = () => {
  return (
    <View style={styles.homeHeader}>
      <ButtonComponent txtStyle={styles.button} text={"Home"} onPress={ () => {}}>
      </ButtonComponent>
      <ButtonComponent txtStyle={styles.button} text={"Find"} onPress={ () => {}}>
      </ButtonComponent>
      <ButtonComponent txtStyle={styles.button} text={"Sales"} onPress={ () => {}}> 
      </ButtonComponent>
      <ButtonComponent txtStyle={styles.button} text={"Profile"} onPress={ () => {}}>
      </ButtonComponent>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: "100%",
  },
  homeHeader: {
    backgroundColor: 'white',
    padding: 10,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    position: "absolute",
    bottom:0,
    borderColor: "black",
    borderTopWidth: 1,
  },
  button: {
    borderRadius: 5,
    padding: 5,
    width:70,
  },
});

export default HomeHeader;
