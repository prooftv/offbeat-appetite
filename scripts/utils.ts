import { SanityIngredient } from '../typings';

export const joinUrl = (a: string, b = ''): string =>
  a.replace(/\/+$/, '') + (b ? '/' + b.replace(/^\/+/, '') : '');

export const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

export const customEaseOut = [0.175, 0.85, 0.42, 0.96];

export const arrayUnique = <T>(array: Array<T>): Array<T> => Array.from(new Set(array));

export const arraySortNumberAsc = (array: number[]): number[] => {
  const copy = array.slice(0);
  copy.sort((r1, r2) => {
    if (r1 > r2) {
      return 1;
    } else if (r1 < r2) {
      return -1;
    } else {
      return 0;
    }
  });
  return copy;
};

export function stringifyRecipeIngredient({ name, unit, quantity }: SanityIngredient): string {
  const quantityString: string = quantity === 0 ? '' : `${quantity}`;
  // const unitString: string = unit === 'unitless' ? (quantity === 0 ? '' : ' ') : `${unit} `;
  const unitString: string = quantity === 0 ? '' : unit === 'unitless' ? ' ' : `${unit} `;

  return `${quantityString}${unitString}${name}`;
}
