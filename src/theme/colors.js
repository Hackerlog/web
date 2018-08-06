export type Colors = {
  white: string,
  greyLightest: string,
  greyLight: string,
  grey: string,
  greyDark: string,
  black: string,
  primary: string,
  secondary: string,
  tertiary: string,
  success: string,
  info: string,
  error: string,
  darkToPrimaryGradient: string,
  secondaryToLightGradient: string,
  loginGradient: string,
};

const colors: Colors = {
  white: '#ffffff',
  greyLightest: '#F9FAFC',
  greyLight: '#DADDF2',
  grey: '#9EA0B0',
  greyDark: '#465468',
  black: '#202E41',
  primary: '#4651AF',
  secondary: '#BFC6F1',
  tertiary: '#CE4F54',
  success: '#42A852',
  info: '#4281A8',
  error: '#ED5447',
  darkToPrimaryGradient: 'linear-gradient(120deg, #212F49, #454EB2)',
  secondaryToLightGradient: 'linear-gradient(120deg, #DBDFF8, #C2C8F2)',
  loginGradient: 'linear-gradient(120deg, #4552B1, #B9C1EF)',
};

export default colors;
