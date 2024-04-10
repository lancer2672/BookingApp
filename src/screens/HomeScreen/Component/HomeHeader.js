import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from '@src/components/Button';


const HomeHeader = () => {
  return (
    <View style={styles.homeHeader}>
      <ButtonComponent style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </ButtonComponent>
      <ButtonComponent style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </ButtonComponent>
      <ButtonComponent style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </ButtonComponent>
      <ButtonComponent style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
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
    width:80,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeHeader;
