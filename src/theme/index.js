import Colors from './colors';

export default {
  white: Colors.white,
  default: Colors.grey,
  grey: {
    lightest: Colors.greyLightest,
    light: Colors.greyLight,
    default: Colors.grey,
    dark: Colors.greyDark,
  },
  black: Colors.black,
  primary: Colors.primary,
  secondary: Colors.secondary,
  success: Colors.success,
  info: Colors.info,
  error: Colors.error,
  gradients: {
    darkToPrimary: Colors.darkToPrimaryGradient,
    secondaryToLight: Colors.secondaryToLightGradient,
    login: Colors.loginGradient,
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
