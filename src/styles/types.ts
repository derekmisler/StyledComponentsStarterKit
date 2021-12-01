interface TypographyProps {
  baseFontFamily: string;
  headingFontFamily: string;
}
interface ColorProps {
  text: string;
  border: string;
  accent: string;
  link: string;
  linkHover: string;
  disabled: string;
  background: string;
}
export interface Theme extends ColorProps, TypographyProps {}

export interface ThemeProps {
  theme: Theme;
}
