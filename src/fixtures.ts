import { createTests } from '@bemedev/vitest-extended';
import type { TestArgs } from '@bemedev/vitest-extended/lib/types';

export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R;

type Args = {
  fn: Fn;
  array: readonly any[] | any[];
  notIn: any;
};

export const buildTests = ({ fn, array, notIn }: Args) => {
  const useTests = createTests(fn);
  const tests = [
    ...array.map(color => [color, [color], true] as any),
    ['not in', [notIn], false],
  ] as TestArgs<any>;

  useTests(...tests);
};
