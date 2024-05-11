import {generalColor} from '@src/theme/color';
import {useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const SettingItem = ({
  name,
  icon,
  backgroundIconColor,
  onClick,
  selectionName = '',
  isToggleMode = false,
  defaultSwitchValue = false,
}) => {
  const [isEnabled, setIsEnabled] = useState(defaultSwitchValue);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <View
        style={{
          backgroundColor: backgroundIconColor,
          padding: 8,
          borderRadius: 25,
          marginRight: 12,
        }}>
        {icon}
      </View>
      <View style={{flex: 1}}>
        <Text style={{color: generalColor.primary}}>{name}</Text>
      </View>
      <Text style={{color: generalColor.primary}}>{selectionName}</Text>

      {isToggleMode ? (
        <Switch
          trackColor={{false: '#ddd', true: '#81b0ff'}}
          thumbColor={isEnabled ? 'white' : 'black'}
          onValueChange={() => {
            setIsEnabled(prev => !prev);
            onClick();
          }}
          value={isEnabled}
        />
      ) : (
        <TouchableOpacity
          onPress={onClick}
          style={{
            borderRadius: 8,
            backgroundColor: generalColor.primary,
            padding: 8,
            marginLeft: 12,
          }}>
          <Entypo name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SettingItem;
