import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import BaseScreenContainter from '../../../components/container/BaseScreenContainer';

import AppColors from '../../../constant/Colors';
import NotificationItem from '../component/NotificationItem';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const NotificationScreen = () => {
  return (
    <BaseScreenContainter iconName="bell" containerStyle={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <NotificationItem title={item.title} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </BaseScreenContainter>
  );
};

export default NotificationScreen;
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
  separator: { height: 1, backgroundColor: AppColors.primaryColor },
});
