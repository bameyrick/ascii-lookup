import { numberArrayFromRange } from 'number-array-from-range';
import { ASCIIEncoding } from './ASCIIEncoding';
import { ASCIIItem } from './ASCIIItem';
import { CP437 } from './CP437';
import { decimalToASCIIItem } from './decimal-to-ascii-item';

const extendedTableCodes = numberArrayFromRange(128, 255);
const bytes = new Uint8Array(extendedTableCodes);

/**
 * Generates table for decimal codes 128 - 255
 */
export function generateExtendedTable(encoding: ASCIIEncoding): ASCIIItem[] {
  let text;

  switch (encoding) {
    case ASCIIEncoding.CP437: {
      text = extendedTableCodes.reduce((result, code) => ({ ...result, [code - 128]: CP437[code] }), {});
      break;
    }
    case ASCIIEncoding.UTF8: {
      text = extendedTableCodes.reduce((result, code) => ({ ...result, [code - 128]: String.fromCharCode(code) }), {});
      break;
    }
    default: {
      // tslint:disable-next-line: no-any
      text = new TextDecoder(encoding, { NONSTANDARD_allowLegacyEncoding: true } as any).decode(bytes);
    }
  }

  return extendedTableCodes.map(dec => decimalToASCIIItem(dec, text, encoding));
}
