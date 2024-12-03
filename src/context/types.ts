export type ThemeName = "light" | "dark";

export type Theme = {
  name: ThemeName;
  backgroundColor: string;
  items: string;
  textColor: string;
  formBg: string;
};

export interface ThemeContextValue {
  currentTheme: Theme;
  toggleTheme: () => Promise<void>;
}