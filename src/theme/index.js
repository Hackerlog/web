import colors from './colors';

type ViewSizes = {|
  desktop: number,
  tablet: number,
  mobile: number,
|};

type ShadowSizes = {|
  small: string,
  medium: string,
  large: string,
  xl: string,
  xxl: string,
|};

type GradientColors = {|
  darkToPrimary: string,
  secondaryToLight: string,
  login: string,
|};

export type Theme = {
  white: string,
  default: string,
  grey: {|
    lightest: string,
    light: string,
    default: string,
    dark: string,
  |},
  black: string,
  primary: string,
  secondary: string,
  tertiary: string,
  success: string,
  info: string,
  error: string,
  gradients: GradientColors,
  sizes: ViewSizes,
  shadows: ShadowSizes,
};

const theme: Theme = {
  white: colors.white,
  default: colors.grey,
  grey: {
    lightest: colors.greyLightest,
    light: colors.greyLight,
    default: colors.grey,
    dark: colors.greyDark,
  },
  black: colors.black,
  primary: colors.primary,
  secondary: colors.secondary,
  tertiary: colors.tertiary,
  success: colors.success,
  info: colors.info,
  error: colors.error,
  gradients: {
    darkToPrimary: colors.darkToPrimaryGradient,
    secondaryToLight: colors.secondaryToLightGradient,
    login: colors.loginGradient,
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

export default theme;
