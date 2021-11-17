import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextInput,
  Platform,
  View,
  TextInputProps,
} from 'react-native';

import BaseText from './BaseText';

type Props = TextInputProps & {
  value?: string;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
  isNotBold?: boolean;
  placeholder?: string;
};

const BaseTextInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  containerStyle,
  title,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      {title && <BaseText>{title} </BaseText>}
      <TextInput
        {...rest}
        keyboardAppearance="light"
        textAlign={'left'}
        onChangeText={onChangeText}
        style={[styles.textInput, theme.dark ? styles.dark : styles.light]}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  textInput: {
    flex: 1,
    fontSize: 17,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
  },
  notBold: { fontWeight: 'normal' },
  dark: { color: 'white' },
  light: { color: '#2D2942' },
});
export default BaseTextInput;
