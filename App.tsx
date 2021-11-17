import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function App(): React.ReactElement | null {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Image
            source={require('./src/assets/excited-apple.gif')}
            style={styles.logo}
          />
          <Text>Apple Juice</Text>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});
