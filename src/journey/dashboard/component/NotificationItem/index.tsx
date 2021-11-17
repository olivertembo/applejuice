import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseText from '../../../../components/BaseComponents/BaseText';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  title: string;
};

const NotificationItem: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.item}>
      <Icon name="envelope" size={30} color={'#0CA789'} />
      <BaseText style={styles.title}>{title}</BaseText>
    </View>
  );
};

export default NotificationItem;

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
