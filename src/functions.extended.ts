import { COLOR_3_DIGITS } from './constants/3digits';
import { eq } from './functions';
import type { Color3Digits } from './types.extended';

export const isColor3Digits = (value: unknown): value is Color3Digits => {
  return eq(value, ...COLOR_3_DIGITS);
};
