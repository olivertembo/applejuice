import React, {useState, useEffect} from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, View, StyleSheet, Image} from 'react-native';
import defaulLogo from './src/assets/logo.png';

const logos = [
  {
    name: 'Apple Juice 1.0',
    image: require('./src/assets/logo.png'),
  },
  {
    name: 'Apple Juice next',
    image: require('./src/assets/excited-apple.gif'),
  },
];

const Logo = () => {
  const [logoImage, setLogoImage] = useState(logos[0].image);

  useEffect(() => {
    setTimeout(() => {
      let index = logos.findIndex(logo => logo.image === logoImage); //0
      if (index === 0) {
        setLogoImage(logos[1].image);
      } else {
        setLogoImage(logos[0].image);
      }
    }, 5000);
  }, []);

  return (
    <View style={styles.logo}>
      <Image source={logoImage} style={styles.logo} />
    </View>
  );
};

export default function App(): React.ReactElement | null {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.textLogo}>Apple Juice 1.2</Text>
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
  textLogo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
