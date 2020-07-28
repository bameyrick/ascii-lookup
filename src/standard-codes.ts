import { numberArrayFromRange } from 'number-array-from-range';
import { ASCIIItem } from './ASCIIItem';
import { decimalToASCIIItem } from './decimal-to-ascii-item';

export const standardCodes: ASCIIItem[] = numberArrayFromRange(0, 128).map(dec => decimalToASCIIItem(dec));
