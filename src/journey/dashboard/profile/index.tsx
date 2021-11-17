import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import BaseScreenContainter from '../../../components/container/BaseScreenContainer';
import BaseTextInput from '../../../components/BaseComponents/BaseTextInput';
import AppColors from '../../../constant/Colors';

const ProfileScreen = () => {
  return (
    <BaseScreenContainter
      iconName="user-circle"
      containerStyle={styles.container}
    >
      <View style={styles.rowContainer}>
        <Icon name="user-circle" size={90} color={AppColors.primaryColor} />

        <BaseTextInput
          title="Add text:"
          multiline
          numberOfLines={4}
          containerStyle={styles.inputContainer}
        />
      </View>
    </BaseScreenContainter>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'column',
    marginHorizontal: 40,
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 10,
    padding: 10,
    alignItems: 'flex-start',
    marginLeft: 10,
    borderWidth: 1,
    height: 100,
    borderColor: AppColors.primaryColor,
  },
});
