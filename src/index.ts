import { ASCIIItem } from './ASCIIItem';
import { ASCIIEncoding } from './ASCIIEncoding';
import { standardCodes } from './standard-codes';
import { generateExtendedTable } from './extended-codes';

export { ASCIIItem } from './ASCIIItem';
export { ASCIIEncoding } from './ASCIIEncoding';

const cache: { [key: string]: { [code: string]: ASCIIItem } } = {};

/**
 * Gets a ASCIIItem for  given decimal and optional encoding (default is UTF8)
 * @param {number} decimal
 * @param {ASCIIEncoding} encoding
 */
export function getASCIIItemForDecimal(decimal: number, encoding: ASCIIEncoding = ASCIIEncoding.UTF8): ASCIIItem {
  const decimalCache = getCacheForKeyAndEncoding('dec', encoding);

  return decimalCache[decimal.toString()];
}

/**
 * Gets a ASCIIItem for  given hex and optional encoding (default is UTF8)
 * @param {string} hex
 * @param {ASCIIEncoding} encoding
 */
export function getASCIIItemForHex(hex: string, encoding: ASCIIEncoding = ASCIIEncoding.UTF8): ASCIIItem {
  const hexCache = getCacheForKeyAndEncoding('hex', encoding);

  return hexCache[hex];
}

/**
 * Gets a cache for a given key and encoding
 */
function getCacheForKeyAndEncoding(key: string, encoding: ASCIIEncoding): { [code: string]: ASCIIItem } {
  const cacheKey = `${key}-${encoding}`;

  if (!cache[cacheKey]) {
    cache[cacheKey] = {};

    [...standardCodes, ...generateExtendedTable(encoding)].forEach(item => (cache[cacheKey][item[key]] = item));
  }

  return cache[cacheKey];
}
