import type {
  COLOR_1_DIGITS,
  COLOR_2_DIGITS,
  COLOR_NUMBER_DIGITS,
  COLOR_STRING_DIGITS,
  CSS_COLORS,
  TRANSPARENCY_DIGITS,
} from './constants';

export type Color1Digits = (typeof COLOR_1_DIGITS)[number];
export type TransparencyDigits = (typeof TRANSPARENCY_DIGITS)[number];
export type ColorNumberDigits = (typeof COLOR_NUMBER_DIGITS)[number];
export type ColorStringDigits = (typeof COLOR_STRING_DIGITS)[number];
export type Color2Digits = (typeof COLOR_2_DIGITS)[number];
export type CssColors = (typeof CSS_COLORS)[number];

export type RGBA1 = `#${Color1Digits}${Color1Digits}${Color1Digits}${
  | Color1Digits
  | ''}`;
