import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

const WelcomeCard: React.FC<Props> = ({ containerStyle }) => {
  return (
    <View style={[styles.item, containerStyle]}>
      <Icon name="envelope" size={190} color={'#0CA789'} />
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 32,
    marginLeft: 5,
  },
});
