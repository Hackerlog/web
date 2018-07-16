import * as styledComponents from 'styled-components';

import Colors from './colors';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
  white: string;
  grey: {
    lightest: string;
    light: string;
    default: string;
    dark: string;
  };
  black: string;
  primary: string;
  secondary: string;
  success: string;
  error: string;
  info: string;
  gradients: {
    darkToPrimary: string;
    secondaryToLight: string;
  };
  sizes: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    xl: string;
    xxl: string;
  };
}

export const theme: IThemeInterface = {
  white: Colors.White,
  grey: {
    lightest: Colors.GreyLightest,
    light: Colors.GreyLight,
    default: Colors.Grey,
    dark: Colors.GreyDark,
  },
  black: Colors.Black,
  primary: Colors.Primary,
  secondary: Colors.Secondary,
  success: Colors.Success,
  info: Colors.Info,
  error: Colors.Error,
  gradients: {
    darkToPrimary: Colors.DarkToPrimaryGradient,
    secondaryToLight: Colors.SecondaryToLightGradient,
  },
  sizes: {
    desktop: 992,
    tablet: 768,
    mobile: 576,
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    large: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    xxl: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, Colors };
