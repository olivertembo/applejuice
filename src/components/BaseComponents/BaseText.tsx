import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

type BaseTextProps = TextProps & {};

const BaseText: React.FC<BaseTextProps> = ({
  style,

  children,

  ...props
}) => {
  const theme = useTheme();
  return (
    <Text
      minimumFontScale={0.5}
      style={[theme.dark ? styles.dark : styles.light, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default BaseText;
const styles = StyleSheet.create({
  dark: { color: 'white' },
  light: { color: '#2D2942' },
});
