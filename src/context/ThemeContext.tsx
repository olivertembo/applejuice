import React, { createContext, useContext, useState } from 'react';
import { ColorSchemeName, useColorScheme } from 'react-native';

export type ThemeContextType = {
  theme: ColorSchemeName;
  setTheme: (theme: ColorSchemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => console.warn('no theme provider'),
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
