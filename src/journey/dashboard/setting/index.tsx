import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import BaseScreenContainter from '../../../components/container/BaseScreenContainer';

import AppColors from '../../../constant/Colors';
import BaseText from '../../../components/BaseComponents/BaseText';

import { useTheme } from '../../../context/ThemeContext';

const SettingsScreen = () => {
  const { theme, setTheme } = useTheme();
  return (
    <BaseScreenContainter iconName="cog" containerStyle={styles.container}>
      <View style={styles.rowContainer}>
        <BaseText style={styles.inputContainer}>Night Mode</BaseText>
        <Switch
          trackColor={{
            false: AppColors.primaryColor,
            true: AppColors.primaryColor,
          }}
          thumbColor={
            theme === 'light' ? AppColors.whiteColor : AppColors.whiteColor
          }
          ios_backgroundColor={AppColors.primaryColor}
          onValueChange={(value) => {
            setTheme(value === false ? 'light' : 'dark');
          }}
          value={theme === 'dark'}
        />
      </View>
    </BaseScreenContainter>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    alignContent: 'stretch',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 50,
    justifyContent: 'space-between',
  },
  inputContainer: { color: AppColors.primaryColor, fontSize: 20 },
});
