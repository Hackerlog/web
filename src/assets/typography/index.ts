import * as Typography from 'typography';
import { Colors } from '../../theme';

type IAdjustSizeTo = (size: string) => object;

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2.7,
  headerFontFamily: ['Source Sans Pro', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'Arial', 'sans-serif'],
  headerColor: Colors.Black,
  bodyColor: Colors.Black,
  bodyWeight: 300,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '300i', '600', '700', '900'],
    },
  ],
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo }: { adjustFontSizeTo: IAdjustSizeTo }) => ({
    '@media (max-width: 576px)': {
      html: {
        ...adjustFontSizeTo('14px'),
      },
    },
    '@media (max-width: 768px)': {
      html: {
        ...adjustFontSizeTo('16px'),
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
