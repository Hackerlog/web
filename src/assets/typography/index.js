import Typography from 'typography';

import colors from '../../theme/colors';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2.7,
  headerFontFamily: ['Source Sans Pro', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Arial', 'sans-serif'],
  headerColor: colors.Black,
  bodyColor: colors.Black,
  bodyWeight: 300,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo }) => ({
    '@media (max-width: 576px)': {
      html: {
        ...adjustFontSizeTo('15px'),
      },
    },
    '@media (max-width: 768px)': {
      html: {
        ...adjustFontSizeTo('17px'),
      },
    },
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 700,
    },
  }),
});

export default typography;
