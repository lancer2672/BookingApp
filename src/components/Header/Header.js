import {StyleSheet, View} from 'react-native';

const Header = ({right, center, left, styles}) => {
  return (
    <View style={[headerStyles.container, styles]}>
      {left && left}
      <View style={headerStyles.center}>{center && center}</View>
      {right && right}
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Header;
