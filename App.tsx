import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
//import Navigation from './src/navigation';



export default function App(): React.ReactElement | null {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View>
          <Text>Hello</Text>
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
