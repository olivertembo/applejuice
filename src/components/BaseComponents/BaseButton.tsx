import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  StyleSheet,
} from 'react-native';

import Colors from '../../constant/Colors';
import BaseText from './BaseText';

type ButtonType = 'primary' | 'rePrimary' | 'white';

const backgrounColorTypeMap: Record<ButtonType, StyleProp<ViewStyle>> = {
  primary: {
    backgroundColor: '#4DE6C7',
  },
  rePrimary: {
    backgroundColor: '#CAF8EE',
  },
  white: {
    backgroundColor: 'white',
  },
};

const textStyleTypeMap: Record<ButtonType, StyleProp<TextStyle>> = {
  primary: {},
  rePrimary: { color: Colors.disabledButtonText },
  white: { color: Colors.primaryText },
};

const BaseButton: React.FC<{
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  type?: ButtonType;
  onPress: () => void;
  disabled?: boolean;
}> = ({ title, containerStyle, type = 'primary', onPress, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, backgrounColorTypeMap[type], containerStyle]}
      onPress={onPress}
    >
      <BaseText style={[styles.text, textStyleTypeMap[type]]}>{title}</BaseText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderRadius: 40,
    height: 45,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: { fontSize: 18, textAlign: 'center' },
  rightIcon: { marginLeft: 7 },
});
export default BaseButton;
