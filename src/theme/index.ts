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
  greyLight: string;
  grey: string;
  greyDark: string;
  green: string;
  black: string;
}

export const theme: IThemeInterface = {
  white: Colors.White,
  greyLight: Colors.GreyLight,
  grey: Colors.Grey,
  greyDark: Colors.GreyDark,
  green: Colors.Green,
  black: Colors.Black,
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, Colors };
