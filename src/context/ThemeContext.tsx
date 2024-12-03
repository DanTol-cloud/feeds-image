import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { Theme, ThemeContextValue } from "./types";
import { themes } from "./themes";

const DefaultContextValue: ThemeContextValue = {
  currentTheme: themes.light,
  toggleTheme: async () => {},
};

export const ThemeContext = createContext<ThemeContextValue>(DefaultContextValue);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.light);

  const toggleTheme = useCallback(async () => {
    const newTheme = currentTheme.name === "light" ? themes.dark : themes.light;
    setCurrentTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme.name);
  }, [currentTheme]);

  useEffect(() => {
    const loadTheme = async () => {
      const savedThemeName = await AsyncStorage.getItem("theme");
      if (savedThemeName === "dark") {
        setCurrentTheme(themes.dark);
      } else {
        setCurrentTheme(themes.light);
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
