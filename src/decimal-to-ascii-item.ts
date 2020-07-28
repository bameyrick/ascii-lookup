import { ASCIIItem } from './ASCIIItem';
import { ASCIIEncoding } from './ASCIIEncoding';
import { LookupTable } from './LookupTable';

/**
 * Converts a decimal to a hex code
 */
export function decimalToASCIIItem(dec: number, text?: LookupTable, encoding: ASCIIEncoding = ASCIIEncoding.UTF8): ASCIIItem {
  let html = '';

  if ((dec < 128 || dec >= 160) && encoding === ASCIIEncoding.UTF8) {
    html = `&#${dec};`;
  }

  let char: string;

  if (dec !== 127) {
    char = text ? text[dec - 128] || '' : String.fromCharCode(dec);
  } else {
    char = '';
  }

  return {
    dec,
    hex: dec.toString(16).slice(-2).toUpperCase().padStart(2, '0'),
    html,
    char,
  };
}
