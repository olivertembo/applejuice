import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../constant/Colors';

type Props = ViewProps & {
  iconName: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const BaseScreenContainter: React.FC<Props> = ({
  iconName,
  children,
  containerStyle,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name={iconName} size={40} color={AppColors.primaryColor} />
      </View>
      <View style={[styles.bodyContainer, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  bodyContainer: { flex: 1 },
  header: {
    borderBottomColor: '#12CDD4',
    borderBottomWidth: 2,
    paddingBottom: 5,
    paddingHorizontal: 20,
  },
});

export default BaseScreenContainter;
