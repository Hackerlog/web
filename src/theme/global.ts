import { injectGlobal } from './';
import Colors from './colors';

const globalStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,600,700,900');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-size: 18px;
    line-height: 27px;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
    line-height: 27px;
    margin: auto;
  }
  h1 {
    font-size: 76px;
    line-height: 81px;
    margin-top: 27px;
    margin-bottom: 54px;
    font-weight: 600;
    color: ${Colors.Black};
  }
  h2 {
    font-size: 47px;
    line-height: 54px;
    margin-top: 27px;
    margin-bottom: 27px;
    font-weight: 400;
    color: ${Colors.Black};
  }
  h3 {
    font-size: 29px;
    line-height: 54px;
    margin-top: 27px;
    margin-bottom: 0px;
    font-weight: 900;
    color: ${Colors.Black};
  }
  h4 {
    font-size: 18px;
    line-height: 27px;
    margin-top: 27px;
    margin-bottom: 0px;
    font-weight: 700;
    color: ${Colors.Black};
  }
  h5 {
    font-size: 18px;
    line-height: 27px;
    margin-top: 27px;
    margin-bottom: 0px;
    font-weight: 700;
    color: ${Colors.Black};
  }
  p, ul, ol, pre, table, blockquote {
    margin-top: 0px;
    margin-bottom: 27px;
    font-weight: 300;
    color: ${Colors.Black};
  }
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  /* Let's make sure all's aligned */
  hr, {
    border: 1px solid;
    margin: -1px 0;
  }
  a, b, i, strong, em, small, code {
    line-height: 0;
  }
  sub, sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
`;

export default globalStyles;
