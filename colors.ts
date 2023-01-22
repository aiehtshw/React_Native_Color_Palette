export type Theme = {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  background: string;
};
export type Themes = {
  dark: Theme;
  light: Theme;
};
const themes: Themes = {
  dark: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#ffffff',
    textSecondary: '#8899a6',
    background: '#15202b',
  },
  light: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#14171a',
    textSecondary: '#657786',
    background: '#ffffff',
  },
};
export default  themes ;
