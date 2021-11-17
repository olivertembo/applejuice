import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppColors from '../../../constant/Colors';
import BaseText from '../../../components/BaseComponents/BaseText';
import { SafeAreaView } from 'react-native-safe-area-context';
import WelcomeCard from '../component/WelcomeCard';
const CARD_WIDTH = 200;
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
  {
    id: 'bd7acb1ea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68af3c-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a044f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseText style={styles.title}>Welcome to Lemonade</BaseText>

      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={() => <WelcomeCard containerStyle={styles.cardContainer} />}
        snapToInterval={CARD_WIDTH + 10} // Adjust to your content width
        decelerationRate={'fast'}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: AppColors.primaryColor,
  },
  cardContainer: {
    width: CARD_WIDTH,
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
