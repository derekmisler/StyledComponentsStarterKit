import { Theme } from '@styles/types';

const COLORS = {
  gray: '#4C566A',
  black: '#2E3440',
  white: '#f4f1ec',
  red: '#BF616A',
  redDarker: '#9b4b56',
  blue: '#81A1C1',
  blueDarker: '#5E81AC',
};
const TYPOGRAPHY = {
  baseFontFamily: '"Roboto", sans-serif',
  headingFontFamily: '"Roboto Slab", serif;',
};

export const theme: { [themeName: string]: Theme } = {
  light: {
    ...TYPOGRAPHY,
    text: COLORS.gray,
    border: COLORS.gray,
    accent: COLORS.blueDarker,
    link: COLORS.redDarker,
    linkHover: COLORS.red,
    disabled: COLORS.gray,
    background: COLORS.white,
  },
  dark: {
    ...TYPOGRAPHY,
    text: COLORS.white,
    border: COLORS.white,
    accent: COLORS.red,
    link: COLORS.blue,
    linkHover: COLORS.blueDarker,
    disabled: COLORS.gray,
    background: COLORS.black,
  },
};
