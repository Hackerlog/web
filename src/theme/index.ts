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
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, Colors };
