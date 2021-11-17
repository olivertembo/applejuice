import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseScreenContainter from '../../../components/container/BaseScreenContainer';
import BaseTextInput from '../../../components/BaseComponents/BaseTextInput';
import AppColors from '../../../constant/Colors';

const HomeScreen = () => {
  return (
    <BaseScreenContainter iconName="home" containerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <Icon name="user-circle" size={90} color={AppColors.primaryColor} />
        <View style={styles.inputContainer}>
          <BaseTextInput title="Name:" />
          <BaseTextInput title="Email:" />
        </View>
      </View>
    </BaseScreenContainter>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  rowContainer: { flexDirection: 'row', marginHorizontal: 40 },
  inputContainer: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: AppColors.primaryColor,
    padding: 10,
    flex: 1,
    alignSelf: 'center',
  },
});
