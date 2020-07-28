import { getASCIIItemForHex, ASCIIEncoding } from '../src';

describe('getASCIIItemForHex()', () => {
  describe('Standard codes', () => {
    it(`00's result is correct`, () => expect(getASCIIItemForHex('00')).toEqual({ dec: 0, hex: '00', html: '&#0;', char: '\0' }));

    it(`01's result is correct`, () => expect(getASCIIItemForHex('01')).toEqual({ dec: 1, hex: '01', html: '&#1;', char: '\u0001' }));

    it(`02's result is correct`, () => expect(getASCIIItemForHex('02')).toEqual({ dec: 2, hex: '02', html: '&#2;', char: '\u0002' }));

    it(`03's result is correct`, () => expect(getASCIIItemForHex('03')).toEqual({ dec: 3, hex: '03', html: '&#3;', char: '\u0003' }));

    it(`04's result is correct`, () => expect(getASCIIItemForHex('04')).toEqual({ dec: 4, hex: '04', html: '&#4;', char: '\u0004' }));

    it(`05's result is correct`, () => expect(getASCIIItemForHex('05')).toEqual({ dec: 5, hex: '05', html: '&#5;', char: '\u0005' }));

    it(`06's result is correct`, () => expect(getASCIIItemForHex('06')).toEqual({ dec: 6, hex: '06', html: '&#6;', char: '\u0006' }));

    it(`07's result is correct`, () => expect(getASCIIItemForHex('07')).toEqual({ dec: 7, hex: '07', html: '&#7;', char: '\u0007' }));

    it(`08's result is correct`, () => expect(getASCIIItemForHex('08')).toEqual({ dec: 8, hex: '08', html: '&#8;', char: '\u0008' }));

    it(`09's result is correct`, () => expect(getASCIIItemForHex('09')).toEqual({ dec: 9, hex: '09', html: '&#9;', char: '\u0009' }));

    it(`0A's result is correct`, () => expect(getASCIIItemForHex('0A')).toEqual({ dec: 10, hex: '0A', html: '&#10;', char: '\n' }));

    it(`0B's result is correct`, () => expect(getASCIIItemForHex('0B')).toEqual({ dec: 11, hex: '0B', html: '&#11;', char: '\v' }));

    it(`0C's result is correct`, () => expect(getASCIIItemForHex('0C')).toEqual({ dec: 12, hex: '0C', html: '&#12;', char: '\f' }));

    it(`0D's result is correct`, () => expect(getASCIIItemForHex('0D')).toEqual({ dec: 13, hex: '0D', html: '&#13;', char: '\r' }));

    it(`0E's result is correct`, () => expect(getASCIIItemForHex('0E')).toEqual({ dec: 14, hex: '0E', html: '&#14;', char: '\u000E' }));

    it(`0F's result is correct`, () => expect(getASCIIItemForHex('0F')).toEqual({ dec: 15, hex: '0F', html: '&#15;', char: '\u000F' }));

    it(`10's result is correct`, () => expect(getASCIIItemForHex('10')).toEqual({ dec: 16, hex: '10', html: '&#16;', char: '\u0010' }));

    it(`11's result is correct`, () => expect(getASCIIItemForHex('11')).toEqual({ dec: 17, hex: '11', html: '&#17;', char: '\u0011' }));

    it(`12's result is correct`, () => expect(getASCIIItemForHex('12')).toEqual({ dec: 18, hex: '12', html: '&#18;', char: '\u0012' }));

    it(`13's result is correct`, () => expect(getASCIIItemForHex('13')).toEqual({ dec: 19, hex: '13', html: '&#19;', char: '\u0013' }));

    it(`14's result is correct`, () => expect(getASCIIItemForHex('14')).toEqual({ dec: 20, hex: '14', html: '&#20;', char: '\u0014' }));

    it(`15's result is correct`, () => expect(getASCIIItemForHex('15')).toEqual({ dec: 21, hex: '15', html: '&#21;', char: '\u0015' }));

    it(`16's result is correct`, () => expect(getASCIIItemForHex('16')).toEqual({ dec: 22, hex: '16', html: '&#22;', char: '\u0016' }));

    it(`17's result is correct`, () => expect(getASCIIItemForHex('17')).toEqual({ dec: 23, hex: '17', html: '&#23;', char: '\u0017' }));

    it(`18's result is correct`, () => expect(getASCIIItemForHex('18')).toEqual({ dec: 24, hex: '18', html: '&#24;', char: '\u0018' }));

    it(`19's result is correct`, () => expect(getASCIIItemForHex('19')).toEqual({ dec: 25, hex: '19', html: '&#25;', char: '\u0019' }));

    it(`1A's result is correct`, () => expect(getASCIIItemForHex('1A')).toEqual({ dec: 26, hex: '1A', html: '&#26;', char: '\u001A' }));

    it(`1B's result is correct`, () => expect(getASCIIItemForHex('1B')).toEqual({ dec: 27, hex: '1B', html: '&#27;', char: '\u001B' }));

    it(`1C's result is correct`, () => expect(getASCIIItemForHex('1C')).toEqual({ dec: 28, hex: '1C', html: '&#28;', char: '\u001C' }));

    it(`1D's result is correct`, () => expect(getASCIIItemForHex('1D')).toEqual({ dec: 29, hex: '1D', html: '&#29;', char: '\u001D' }));

    it(`1E's result is correct`, () => expect(getASCIIItemForHex('1E')).toEqual({ dec: 30, hex: '1E', html: '&#30;', char: '\u001E' }));

    it(`1F's result is correct`, () => expect(getASCIIItemForHex('1F')).toEqual({ dec: 31, hex: '1F', html: '&#31;', char: '\u001F' }));

    it(`20's result is correct`, () => expect(getASCIIItemForHex('20')).toEqual({ dec: 32, hex: '20', html: '&#32;', char: ' ' }));

    it(`21's result is correct`, () => expect(getASCIIItemForHex('21')).toEqual({ dec: 33, hex: '21', html: '&#33;', char: '!' }));

    it(`22's result is correct`, () => expect(getASCIIItemForHex('22')).toEqual({ dec: 34, hex: '22', html: '&#34;', char: '"' }));

    it(`23's result is correct`, () => expect(getASCIIItemForHex('23')).toEqual({ dec: 35, hex: '23', html: '&#35;', char: '#' }));

    it(`24's result is correct`, () => expect(getASCIIItemForHex('24')).toEqual({ dec: 36, hex: '24', html: '&#36;', char: '$' }));

    it(`25's result is correct`, () => expect(getASCIIItemForHex('25')).toEqual({ dec: 37, hex: '25', html: '&#37;', char: '%' }));

    it(`26's result is correct`, () => expect(getASCIIItemForHex('26')).toEqual({ dec: 38, hex: '26', html: '&#38;', char: '&' }));

    it(`27's result is correct`, () => expect(getASCIIItemForHex('27')).toEqual({ dec: 39, hex: '27', html: '&#39;', char: `'` }));

    it(`28's result is correct`, () => expect(getASCIIItemForHex('28')).toEqual({ dec: 40, hex: '28', html: '&#40;', char: '(' }));

    it(`29's result is correct`, () => expect(getASCIIItemForHex('29')).toEqual({ dec: 41, hex: '29', html: '&#41;', char: ')' }));

    it(`2A's result is correct`, () => expect(getASCIIItemForHex('2A')).toEqual({ dec: 42, hex: '2A', html: '&#42;', char: '*' }));

    it(`2B's result is correct`, () => expect(getASCIIItemForHex('2B')).toEqual({ dec: 43, hex: '2B', html: '&#43;', char: '+' }));

    it(`2C's result is correct`, () => expect(getASCIIItemForHex('2C')).toEqual({ dec: 44, hex: '2C', html: '&#44;', char: ',' }));

    it(`2D's result is correct`, () => expect(getASCIIItemForHex('2D')).toEqual({ dec: 45, hex: '2D', html: '&#45;', char: '-' }));

    it(`2E's result is correct`, () => expect(getASCIIItemForHex('2E')).toEqual({ dec: 46, hex: '2E', html: '&#46;', char: '.' }));

    it(`2F's result is correct`, () => expect(getASCIIItemForHex('2F')).toEqual({ dec: 47, hex: '2F', html: '&#47;', char: '/' }));

    it(`30's result is correct`, () => expect(getASCIIItemForHex('30')).toEqual({ dec: 48, hex: '30', html: '&#48;', char: '0' }));

    it(`31's result is correct`, () => expect(getASCIIItemForHex('31')).toEqual({ dec: 49, hex: '31', html: '&#49;', char: '1' }));

    it(`32's result is correct`, () => expect(getASCIIItemForHex('32')).toEqual({ dec: 50, hex: '32', html: '&#50;', char: '2' }));

    it(`33's result is correct`, () => expect(getASCIIItemForHex('33')).toEqual({ dec: 51, hex: '33', html: '&#51;', char: '3' }));

    it(`34's result is correct`, () => expect(getASCIIItemForHex('34')).toEqual({ dec: 52, hex: '34', html: '&#52;', char: '4' }));

    it(`35's result is correct`, () => expect(getASCIIItemForHex('35')).toEqual({ dec: 53, hex: '35', html: '&#53;', char: '5' }));

    it(`36's result is correct`, () => expect(getASCIIItemForHex('36')).toEqual({ dec: 54, hex: '36', html: '&#54;', char: '6' }));

    it(`37's result is correct`, () => expect(getASCIIItemForHex('37')).toEqual({ dec: 55, hex: '37', html: '&#55;', char: '7' }));

    it(`38's result is correct`, () => expect(getASCIIItemForHex('38')).toEqual({ dec: 56, hex: '38', html: '&#56;', char: '8' }));

    it(`39's result is correct`, () => expect(getASCIIItemForHex('39')).toEqual({ dec: 57, hex: '39', html: '&#57;', char: '9' }));

    it(`3A's result is correct`, () => expect(getASCIIItemForHex('3A')).toEqual({ dec: 58, hex: '3A', html: '&#58;', char: ':' }));

    it(`3B's result is correct`, () => expect(getASCIIItemForHex('3B')).toEqual({ dec: 59, hex: '3B', html: '&#59;', char: ';' }));

    it(`3C's result is correct`, () => expect(getASCIIItemForHex('3C')).toEqual({ dec: 60, hex: '3C', html: '&#60;', char: '<' }));

    it(`3D's result is correct`, () => expect(getASCIIItemForHex('3D')).toEqual({ dec: 61, hex: '3D', html: '&#61;', char: '=' }));

    it(`3E's result is correct`, () => expect(getASCIIItemForHex('3E')).toEqual({ dec: 62, hex: '3E', html: '&#62;', char: '>' }));

    it(`3F's result is correct`, () => expect(getASCIIItemForHex('3F')).toEqual({ dec: 63, hex: '3F', html: '&#63;', char: '?' }));

    it(`40's result is correct`, () => expect(getASCIIItemForHex('40')).toEqual({ dec: 64, hex: '40', html: '&#64;', char: '@' }));

    it(`41's result is correct`, () => expect(getASCIIItemForHex('41')).toEqual({ dec: 65, hex: '41', html: '&#65;', char: 'A' }));

    it(`42's result is correct`, () => expect(getASCIIItemForHex('42')).toEqual({ dec: 66, hex: '42', html: '&#66;', char: 'B' }));

    it(`43's result is correct`, () => expect(getASCIIItemForHex('43')).toEqual({ dec: 67, hex: '43', html: '&#67;', char: 'C' }));

    it(`44's result is correct`, () => expect(getASCIIItemForHex('44')).toEqual({ dec: 68, hex: '44', html: '&#68;', char: 'D' }));

    it(`45's result is correct`, () => expect(getASCIIItemForHex('45')).toEqual({ dec: 69, hex: '45', html: '&#69;', char: 'E' }));

    it(`46's result is correct`, () => expect(getASCIIItemForHex('46')).toEqual({ dec: 70, hex: '46', html: '&#70;', char: 'F' }));

    it(`47's result is correct`, () => expect(getASCIIItemForHex('47')).toEqual({ dec: 71, hex: '47', html: '&#71;', char: 'G' }));

    it(`48's result is correct`, () => expect(getASCIIItemForHex('48')).toEqual({ dec: 72, hex: '48', html: '&#72;', char: 'H' }));

    it(`49's result is correct`, () => expect(getASCIIItemForHex('49')).toEqual({ dec: 73, hex: '49', html: '&#73;', char: 'I' }));

    it(`4A's result is correct`, () => expect(getASCIIItemForHex('4A')).toEqual({ dec: 74, hex: '4A', html: '&#74;', char: 'J' }));

    it(`4B's result is correct`, () => expect(getASCIIItemForHex('4B')).toEqual({ dec: 75, hex: '4B', html: '&#75;', char: 'K' }));

    it(`4C's result is correct`, () => expect(getASCIIItemForHex('4C')).toEqual({ dec: 76, hex: '4C', html: '&#76;', char: 'L' }));

    it(`4D's result is correct`, () => expect(getASCIIItemForHex('4D')).toEqual({ dec: 77, hex: '4D', html: '&#77;', char: 'M' }));

    it(`4E's result is correct`, () => expect(getASCIIItemForHex('4E')).toEqual({ dec: 78, hex: '4E', html: '&#78;', char: 'N' }));

    it(`4F's result is correct`, () => expect(getASCIIItemForHex('4F')).toEqual({ dec: 79, hex: '4F', html: '&#79;', char: 'O' }));

    it(`50's result is correct`, () => expect(getASCIIItemForHex('50')).toEqual({ dec: 80, hex: '50', html: '&#80;', char: 'P' }));

    it(`51's result is correct`, () => expect(getASCIIItemForHex('51')).toEqual({ dec: 81, hex: '51', html: '&#81;', char: 'Q' }));

    it(`52's result is correct`, () => expect(getASCIIItemForHex('52')).toEqual({ dec: 82, hex: '52', html: '&#82;', char: 'R' }));

    it(`53's result is correct`, () => expect(getASCIIItemForHex('53')).toEqual({ dec: 83, hex: '53', html: '&#83;', char: 'S' }));

    it(`54's result is correct`, () => expect(getASCIIItemForHex('54')).toEqual({ dec: 84, hex: '54', html: '&#84;', char: 'T' }));

    it(`55's result is correct`, () => expect(getASCIIItemForHex('55')).toEqual({ dec: 85, hex: '55', html: '&#85;', char: 'U' }));

    it(`56's result is correct`, () => expect(getASCIIItemForHex('56')).toEqual({ dec: 86, hex: '56', html: '&#86;', char: 'V' }));

    it(`57's result is correct`, () => expect(getASCIIItemForHex('57')).toEqual({ dec: 87, hex: '57', html: '&#87;', char: 'W' }));

    it(`58's result is correct`, () => expect(getASCIIItemForHex('58')).toEqual({ dec: 88, hex: '58', html: '&#88;', char: 'X' }));

    it(`59's result is correct`, () => expect(getASCIIItemForHex('59')).toEqual({ dec: 89, hex: '59', html: '&#89;', char: 'Y' }));

    it(`5A's result is correct`, () => expect(getASCIIItemForHex('5A')).toEqual({ dec: 90, hex: '5A', html: '&#90;', char: 'Z' }));

    it(`5B's result is correct`, () => expect(getASCIIItemForHex('5B')).toEqual({ dec: 91, hex: '5B', html: '&#91;', char: '[' }));

    it(`5C's result is correct`, () => expect(getASCIIItemForHex('5C')).toEqual({ dec: 92, hex: '5C', html: '&#92;', char: '\\' }));

    it(`5D's result is correct`, () => expect(getASCIIItemForHex('5D')).toEqual({ dec: 93, hex: '5D', html: '&#93;', char: ']' }));

    it(`5E's result is correct`, () => expect(getASCIIItemForHex('5E')).toEqual({ dec: 94, hex: '5E', html: '&#94;', char: '^' }));

    it(`5F's result is correct`, () => expect(getASCIIItemForHex('5F')).toEqual({ dec: 95, hex: '5F', html: '&#95;', char: '_' }));

    it(`60's result is correct`, () => expect(getASCIIItemForHex('60')).toEqual({ dec: 96, hex: '60', html: '&#96;', char: '`' }));

    it(`61's result is correct`, () => expect(getASCIIItemForHex('61')).toEqual({ dec: 97, hex: '61', html: '&#97;', char: 'a' }));

    it(`62's result is correct`, () => expect(getASCIIItemForHex('62')).toEqual({ dec: 98, hex: '62', html: '&#98;', char: 'b' }));

    it(`63's result is correct`, () => expect(getASCIIItemForHex('63')).toEqual({ dec: 99, hex: '63', html: '&#99;', char: 'c' }));

    it(`64's result is correct`, () => expect(getASCIIItemForHex('64')).toEqual({ dec: 100, hex: '64', html: '&#100;', char: 'd' }));

    it(`65's result is correct`, () => expect(getASCIIItemForHex('65')).toEqual({ dec: 101, hex: '65', html: '&#101;', char: 'e' }));

    it(`66's result is correct`, () => expect(getASCIIItemForHex('66')).toEqual({ dec: 102, hex: '66', html: '&#102;', char: 'f' }));

    it(`67's result is correct`, () => expect(getASCIIItemForHex('67')).toEqual({ dec: 103, hex: '67', html: '&#103;', char: 'g' }));

    it(`68's result is correct`, () => expect(getASCIIItemForHex('68')).toEqual({ dec: 104, hex: '68', html: '&#104;', char: 'h' }));

    it(`69's result is correct`, () => expect(getASCIIItemForHex('69')).toEqual({ dec: 105, hex: '69', html: '&#105;', char: 'i' }));

    it(`6A's result is correct`, () => expect(getASCIIItemForHex('6A')).toEqual({ dec: 106, hex: '6A', html: '&#106;', char: 'j' }));

    it(`6B's result is correct`, () => expect(getASCIIItemForHex('6B')).toEqual({ dec: 107, hex: '6B', html: '&#107;', char: 'k' }));

    it(`6C's result is correct`, () => expect(getASCIIItemForHex('6C')).toEqual({ dec: 108, hex: '6C', html: '&#108;', char: 'l' }));

    it(`6D's result is correct`, () => expect(getASCIIItemForHex('6D')).toEqual({ dec: 109, hex: '6D', html: '&#109;', char: 'm' }));

    it(`6E's result is correct`, () => expect(getASCIIItemForHex('6E')).toEqual({ dec: 110, hex: '6E', html: '&#110;', char: 'n' }));

    it(`6F's result is correct`, () => expect(getASCIIItemForHex('6F')).toEqual({ dec: 111, hex: '6F', html: '&#111;', char: 'o' }));

    it(`70's result is correct`, () => expect(getASCIIItemForHex('70')).toEqual({ dec: 112, hex: '70', html: '&#112;', char: 'p' }));

    it(`71's result is correct`, () => expect(getASCIIItemForHex('71')).toEqual({ dec: 113, hex: '71', html: '&#113;', char: 'q' }));

    it(`72's result is correct`, () => expect(getASCIIItemForHex('72')).toEqual({ dec: 114, hex: '72', html: '&#114;', char: 'r' }));

    it(`73's result is correct`, () => expect(getASCIIItemForHex('73')).toEqual({ dec: 115, hex: '73', html: '&#115;', char: 's' }));

    it(`74's result is correct`, () => expect(getASCIIItemForHex('74')).toEqual({ dec: 116, hex: '74', html: '&#116;', char: 't' }));

    it(`75's result is correct`, () => expect(getASCIIItemForHex('75')).toEqual({ dec: 117, hex: '75', html: '&#117;', char: 'u' }));

    it(`76's result is correct`, () => expect(getASCIIItemForHex('76')).toEqual({ dec: 118, hex: '76', html: '&#118;', char: 'v' }));

    it(`77's result is correct`, () => expect(getASCIIItemForHex('77')).toEqual({ dec: 119, hex: '77', html: '&#119;', char: 'w' }));

    it(`78's result is correct`, () => expect(getASCIIItemForHex('78')).toEqual({ dec: 120, hex: '78', html: '&#120;', char: 'x' }));

    it(`79's result is correct`, () => expect(getASCIIItemForHex('79')).toEqual({ dec: 121, hex: '79', html: '&#121;', char: 'y' }));

    it(`7A's result is correct`, () => expect(getASCIIItemForHex('7A')).toEqual({ dec: 122, hex: '7A', html: '&#122;', char: 'z' }));

    it(`7B's result is correct`, () => expect(getASCIIItemForHex('7B')).toEqual({ dec: 123, hex: '7B', html: '&#123;', char: '{' }));

    it(`7C's result is correct`, () => expect(getASCIIItemForHex('7C')).toEqual({ dec: 124, hex: '7C', html: '&#124;', char: '|' }));

    it(`7D's result is correct`, () => expect(getASCIIItemForHex('7D')).toEqual({ dec: 125, hex: '7D', html: '&#125;', char: '}' }));

    it(`7E's result is correct`, () => expect(getASCIIItemForHex('7E')).toEqual({ dec: 126, hex: '7E', html: '&#126;', char: '~' }));

    it(`7F's result is correct`, () => expect(getASCIIItemForHex('7F')).toEqual({ dec: 127, hex: '7F', html: '&#127;', char: '' }));
  });

  describe('CP437 Extended Codes', () => {
    it(`80's result is correct`, () =>
      expect(getASCIIItemForHex('80', ASCIIEncoding.CP437)).toEqual({ dec: 128, hex: '80', html: '', char: 'Ç' }));

    it(`81's result is correct`, () =>
      expect(getASCIIItemForHex('81', ASCIIEncoding.CP437)).toEqual({ dec: 129, hex: '81', html: '', char: 'ü' }));

    it(`82's result is correct`, () =>
      expect(getASCIIItemForHex('82', ASCIIEncoding.CP437)).toEqual({ dec: 130, hex: '82', html: '', char: 'é' }));

    it(`83's result is correct`, () =>
      expect(getASCIIItemForHex('83', ASCIIEncoding.CP437)).toEqual({ dec: 131, hex: '83', html: '', char: 'â' }));

    it(`84's result is correct`, () =>
      expect(getASCIIItemForHex('84', ASCIIEncoding.CP437)).toEqual({ dec: 132, hex: '84', html: '', char: 'ä' }));

    it(`85's result is correct`, () =>
      expect(getASCIIItemForHex('85', ASCIIEncoding.CP437)).toEqual({ dec: 133, hex: '85', html: '', char: 'à' }));

    it(`86's result is correct`, () =>
      expect(getASCIIItemForHex('86', ASCIIEncoding.CP437)).toEqual({ dec: 134, hex: '86', html: '', char: 'å' }));

    it(`87's result is correct`, () =>
      expect(getASCIIItemForHex('87', ASCIIEncoding.CP437)).toEqual({ dec: 135, hex: '87', html: '', char: 'ç' }));

    it(`88's result is correct`, () =>
      expect(getASCIIItemForHex('88', ASCIIEncoding.CP437)).toEqual({ dec: 136, hex: '88', html: '', char: 'ê' }));

    it(`89's result is correct`, () =>
      expect(getASCIIItemForHex('89', ASCIIEncoding.CP437)).toEqual({ dec: 137, hex: '89', html: '', char: 'ë' }));

    it(`8A's result is correct`, () =>
      expect(getASCIIItemForHex('8A', ASCIIEncoding.CP437)).toEqual({ dec: 138, hex: '8A', html: '', char: 'è' }));

    it(`8B's result is correct`, () =>
      expect(getASCIIItemForHex('8B', ASCIIEncoding.CP437)).toEqual({ dec: 139, hex: '8B', html: '', char: 'ï' }));

    it(`8C's result is correct`, () =>
      expect(getASCIIItemForHex('8C', ASCIIEncoding.CP437)).toEqual({ dec: 140, hex: '8C', html: '', char: 'î' }));

    it(`8D's result is correct`, () =>
      expect(getASCIIItemForHex('8D', ASCIIEncoding.CP437)).toEqual({ dec: 141, hex: '8D', html: '', char: 'ì' }));

    it(`8E's result is correct`, () =>
      expect(getASCIIItemForHex('8E', ASCIIEncoding.CP437)).toEqual({ dec: 142, hex: '8E', html: '', char: 'Ä' }));

    it(`8F's result is correct`, () =>
      expect(getASCIIItemForHex('8F', ASCIIEncoding.CP437)).toEqual({ dec: 143, hex: '8F', html: '', char: 'Å' }));

    it(`90's result is correct`, () =>
      expect(getASCIIItemForHex('90', ASCIIEncoding.CP437)).toEqual({ dec: 144, hex: '90', html: '', char: 'É' }));

    it(`91's result is correct`, () =>
      expect(getASCIIItemForHex('91', ASCIIEncoding.CP437)).toEqual({ dec: 145, hex: '91', html: '', char: 'æ' }));

    it(`92's result is correct`, () =>
      expect(getASCIIItemForHex('92', ASCIIEncoding.CP437)).toEqual({ dec: 146, hex: '92', html: '', char: 'Æ' }));

    it(`93's result is correct`, () =>
      expect(getASCIIItemForHex('93', ASCIIEncoding.CP437)).toEqual({ dec: 147, hex: '93', html: '', char: 'ô' }));

    it(`94's result is correct`, () =>
      expect(getASCIIItemForHex('94', ASCIIEncoding.CP437)).toEqual({ dec: 148, hex: '94', html: '', char: 'ö' }));

    it(`95's result is correct`, () =>
      expect(getASCIIItemForHex('95', ASCIIEncoding.CP437)).toEqual({ dec: 149, hex: '95', html: '', char: 'ò' }));

    it(`96's result is correct`, () =>
      expect(getASCIIItemForHex('96', ASCIIEncoding.CP437)).toEqual({ dec: 150, hex: '96', html: '', char: 'û' }));

    it(`97's result is correct`, () =>
      expect(getASCIIItemForHex('97', ASCIIEncoding.CP437)).toEqual({ dec: 151, hex: '97', html: '', char: 'ù' }));

    it(`98's result is correct`, () =>
      expect(getASCIIItemForHex('98', ASCIIEncoding.CP437)).toEqual({ dec: 152, hex: '98', html: '', char: 'ÿ' }));

    it(`99's result is correct`, () =>
      expect(getASCIIItemForHex('99', ASCIIEncoding.CP437)).toEqual({ dec: 153, hex: '99', html: '', char: 'Ö' }));

    it(`9A's result is correct`, () =>
      expect(getASCIIItemForHex('9A', ASCIIEncoding.CP437)).toEqual({ dec: 154, hex: '9A', html: '', char: 'Ü' }));

    it(`9B's result is correct`, () =>
      expect(getASCIIItemForHex('9B', ASCIIEncoding.CP437)).toEqual({ dec: 155, hex: '9B', html: '', char: '¢' }));

    it(`9C's result is correct`, () =>
      expect(getASCIIItemForHex('9C', ASCIIEncoding.CP437)).toEqual({ dec: 156, hex: '9C', html: '', char: '£' }));

    it(`9D's result is correct`, () =>
      expect(getASCIIItemForHex('9D', ASCIIEncoding.CP437)).toEqual({ dec: 157, hex: '9D', html: '', char: '¥' }));

    it(`9E's result is correct`, () =>
      expect(getASCIIItemForHex('9E', ASCIIEncoding.CP437)).toEqual({ dec: 158, hex: '9E', html: '', char: '₧' }));

    it(`9F's result is correct`, () =>
      expect(getASCIIItemForHex('9F', ASCIIEncoding.CP437)).toEqual({ dec: 159, hex: '9F', html: '', char: 'ƒ' }));

    it(`A0's result is correct`, () =>
      expect(getASCIIItemForHex('A0', ASCIIEncoding.CP437)).toEqual({ dec: 160, hex: 'A0', html: '', char: 'á' }));

    it(`A1's result is correct`, () =>
      expect(getASCIIItemForHex('A1', ASCIIEncoding.CP437)).toEqual({ dec: 161, hex: 'A1', html: '', char: 'í' }));

    it(`A2's result is correct`, () =>
      expect(getASCIIItemForHex('A2', ASCIIEncoding.CP437)).toEqual({ dec: 162, hex: 'A2', html: '', char: 'ó' }));

    it(`A3's result is correct`, () =>
      expect(getASCIIItemForHex('A3', ASCIIEncoding.CP437)).toEqual({ dec: 163, hex: 'A3', html: '', char: 'ú' }));

    it(`A4's result is correct`, () =>
      expect(getASCIIItemForHex('A4', ASCIIEncoding.CP437)).toEqual({ dec: 164, hex: 'A4', html: '', char: 'ñ' }));

    it(`A5's result is correct`, () =>
      expect(getASCIIItemForHex('A5', ASCIIEncoding.CP437)).toEqual({ dec: 165, hex: 'A5', html: '', char: 'Ñ' }));

    it(`A6's result is correct`, () =>
      expect(getASCIIItemForHex('A6', ASCIIEncoding.CP437)).toEqual({ dec: 166, hex: 'A6', html: '', char: 'ª' }));

    it(`A7's result is correct`, () =>
      expect(getASCIIItemForHex('A7', ASCIIEncoding.CP437)).toEqual({ dec: 167, hex: 'A7', html: '', char: 'º' }));

    it(`A8's result is correct`, () =>
      expect(getASCIIItemForHex('A8', ASCIIEncoding.CP437)).toEqual({ dec: 168, hex: 'A8', html: '', char: '¿' }));

    it(`A9's result is correct`, () =>
      expect(getASCIIItemForHex('A9', ASCIIEncoding.CP437)).toEqual({ dec: 169, hex: 'A9', html: '', char: '⌐' }));

    it(`AA's result is correct`, () =>
      expect(getASCIIItemForHex('AA', ASCIIEncoding.CP437)).toEqual({ dec: 170, hex: 'AA', html: '', char: '¬' }));

    it(`AB's result is correct`, () =>
      expect(getASCIIItemForHex('AB', ASCIIEncoding.CP437)).toEqual({ dec: 171, hex: 'AB', html: '', char: '½' }));

    it(`AC's result is correct`, () =>
      expect(getASCIIItemForHex('AC', ASCIIEncoding.CP437)).toEqual({ dec: 172, hex: 'AC', html: '', char: '¼' }));

    it(`AD's result is correct`, () =>
      expect(getASCIIItemForHex('AD', ASCIIEncoding.CP437)).toEqual({ dec: 173, hex: 'AD', html: '', char: '¡' }));

    it(`AE's result is correct`, () =>
      expect(getASCIIItemForHex('AE', ASCIIEncoding.CP437)).toEqual({ dec: 174, hex: 'AE', html: '', char: '«' }));

    it(`AF's result is correct`, () =>
      expect(getASCIIItemForHex('AF', ASCIIEncoding.CP437)).toEqual({ dec: 175, hex: 'AF', html: '', char: '»' }));

    it(`B0's result is correct`, () =>
      expect(getASCIIItemForHex('B0', ASCIIEncoding.CP437)).toEqual({ dec: 176, hex: 'B0', html: '', char: '░' }));

    it(`B1's result is correct`, () =>
      expect(getASCIIItemForHex('B1', ASCIIEncoding.CP437)).toEqual({ dec: 177, hex: 'B1', html: '', char: '▒' }));

    it(`B2's result is correct`, () =>
      expect(getASCIIItemForHex('B2', ASCIIEncoding.CP437)).toEqual({ dec: 178, hex: 'B2', html: '', char: '▓' }));

    it(`B3's result is correct`, () =>
      expect(getASCIIItemForHex('B3', ASCIIEncoding.CP437)).toEqual({ dec: 179, hex: 'B3', html: '', char: '│' }));

    it(`B4's result is correct`, () =>
      expect(getASCIIItemForHex('B4', ASCIIEncoding.CP437)).toEqual({ dec: 180, hex: 'B4', html: '', char: '┤' }));

    it(`B5's result is correct`, () =>
      expect(getASCIIItemForHex('B5', ASCIIEncoding.CP437)).toEqual({ dec: 181, hex: 'B5', html: '', char: '╡' }));

    it(`B6's result is correct`, () =>
      expect(getASCIIItemForHex('B6', ASCIIEncoding.CP437)).toEqual({ dec: 182, hex: 'B6', html: '', char: '╢' }));

    it(`B7's result is correct`, () =>
      expect(getASCIIItemForHex('B7', ASCIIEncoding.CP437)).toEqual({ dec: 183, hex: 'B7', html: '', char: '╖' }));

    it(`B8's result is correct`, () =>
      expect(getASCIIItemForHex('B8', ASCIIEncoding.CP437)).toEqual({ dec: 184, hex: 'B8', html: '', char: '╕' }));

    it(`B9's result is correct`, () =>
      expect(getASCIIItemForHex('B9', ASCIIEncoding.CP437)).toEqual({ dec: 185, hex: 'B9', html: '', char: '╣' }));

    it(`BA's result is correct`, () =>
      expect(getASCIIItemForHex('BA', ASCIIEncoding.CP437)).toEqual({ dec: 186, hex: 'BA', html: '', char: '║' }));

    it(`BB's result is correct`, () =>
      expect(getASCIIItemForHex('BB', ASCIIEncoding.CP437)).toEqual({ dec: 187, hex: 'BB', html: '', char: '╗' }));

    it(`BC's result is correct`, () =>
      expect(getASCIIItemForHex('BC', ASCIIEncoding.CP437)).toEqual({ dec: 188, hex: 'BC', html: '', char: '╝' }));

    it(`BD's result is correct`, () =>
      expect(getASCIIItemForHex('BD', ASCIIEncoding.CP437)).toEqual({ dec: 189, hex: 'BD', html: '', char: '╜' }));

    it(`BE's result is correct`, () =>
      expect(getASCIIItemForHex('BE', ASCIIEncoding.CP437)).toEqual({ dec: 190, hex: 'BE', html: '', char: '╛' }));

    it(`BF's result is correct`, () =>
      expect(getASCIIItemForHex('BF', ASCIIEncoding.CP437)).toEqual({ dec: 191, hex: 'BF', html: '', char: '┐' }));

    it(`C0's result is correct`, () =>
      expect(getASCIIItemForHex('C0', ASCIIEncoding.CP437)).toEqual({ dec: 192, hex: 'C0', html: '', char: '└' }));

    it(`C1's result is correct`, () =>
      expect(getASCIIItemForHex('C1', ASCIIEncoding.CP437)).toEqual({ dec: 193, hex: 'C1', html: '', char: '┴' }));

    it(`C2's result is correct`, () =>
      expect(getASCIIItemForHex('C2', ASCIIEncoding.CP437)).toEqual({ dec: 194, hex: 'C2', html: '', char: '┬' }));

    it(`C3's result is correct`, () =>
      expect(getASCIIItemForHex('C3', ASCIIEncoding.CP437)).toEqual({ dec: 195, hex: 'C3', html: '', char: '├' }));

    it(`C4's result is correct`, () =>
      expect(getASCIIItemForHex('C4', ASCIIEncoding.CP437)).toEqual({ dec: 196, hex: 'C4', html: '', char: '─' }));

    it(`C5's result is correct`, () =>
      expect(getASCIIItemForHex('C5', ASCIIEncoding.CP437)).toEqual({ dec: 197, hex: 'C5', html: '', char: '┼' }));

    it(`C6's result is correct`, () =>
      expect(getASCIIItemForHex('C6', ASCIIEncoding.CP437)).toEqual({ dec: 198, hex: 'C6', html: '', char: '╞' }));

    it(`C7's result is correct`, () =>
      expect(getASCIIItemForHex('C7', ASCIIEncoding.CP437)).toEqual({ dec: 199, hex: 'C7', html: '', char: '╟' }));

    it(`C8's result is correct`, () =>
      expect(getASCIIItemForHex('C8', ASCIIEncoding.CP437)).toEqual({ dec: 200, hex: 'C8', html: '', char: '╚' }));

    it(`C9's result is correct`, () =>
      expect(getASCIIItemForHex('C9', ASCIIEncoding.CP437)).toEqual({ dec: 201, hex: 'C9', html: '', char: '╔' }));

    it(`CA's result is correct`, () =>
      expect(getASCIIItemForHex('CA', ASCIIEncoding.CP437)).toEqual({ dec: 202, hex: 'CA', html: '', char: '╩' }));

    it(`CB's result is correct`, () =>
      expect(getASCIIItemForHex('CB', ASCIIEncoding.CP437)).toEqual({ dec: 203, hex: 'CB', html: '', char: '╦' }));

    it(`CC's result is correct`, () =>
      expect(getASCIIItemForHex('CC', ASCIIEncoding.CP437)).toEqual({ dec: 204, hex: 'CC', html: '', char: '╠' }));

    it(`CD's result is correct`, () =>
      expect(getASCIIItemForHex('CD', ASCIIEncoding.CP437)).toEqual({ dec: 205, hex: 'CD', html: '', char: '═' }));

    it(`CE's result is correct`, () =>
      expect(getASCIIItemForHex('CE', ASCIIEncoding.CP437)).toEqual({ dec: 206, hex: 'CE', html: '', char: '╬' }));

    it(`CF's result is correct`, () =>
      expect(getASCIIItemForHex('CF', ASCIIEncoding.CP437)).toEqual({ dec: 207, hex: 'CF', html: '', char: '╧' }));

    it(`D0's result is correct`, () =>
      expect(getASCIIItemForHex('D0', ASCIIEncoding.CP437)).toEqual({ dec: 208, hex: 'D0', html: '', char: '╨' }));

    it(`D1's result is correct`, () =>
      expect(getASCIIItemForHex('D1', ASCIIEncoding.CP437)).toEqual({ dec: 209, hex: 'D1', html: '', char: '╤' }));

    it(`D2's result is correct`, () =>
      expect(getASCIIItemForHex('D2', ASCIIEncoding.CP437)).toEqual({ dec: 210, hex: 'D2', html: '', char: '╥' }));

    it(`D3's result is correct`, () =>
      expect(getASCIIItemForHex('D3', ASCIIEncoding.CP437)).toEqual({ dec: 211, hex: 'D3', html: '', char: '╙' }));

    it(`D4's result is correct`, () =>
      expect(getASCIIItemForHex('D4', ASCIIEncoding.CP437)).toEqual({ dec: 212, hex: 'D4', html: '', char: '╘' }));

    it(`D5's result is correct`, () =>
      expect(getASCIIItemForHex('D5', ASCIIEncoding.CP437)).toEqual({ dec: 213, hex: 'D5', html: '', char: '╒' }));

    it(`D6's result is correct`, () =>
      expect(getASCIIItemForHex('D6', ASCIIEncoding.CP437)).toEqual({ dec: 214, hex: 'D6', html: '', char: '╓' }));

    it(`D7's result is correct`, () =>
      expect(getASCIIItemForHex('D7', ASCIIEncoding.CP437)).toEqual({ dec: 215, hex: 'D7', html: '', char: '╫' }));

    it(`D8's result is correct`, () =>
      expect(getASCIIItemForHex('D8', ASCIIEncoding.CP437)).toEqual({ dec: 216, hex: 'D8', html: '', char: '╪' }));

    it(`D9's result is correct`, () =>
      expect(getASCIIItemForHex('D9', ASCIIEncoding.CP437)).toEqual({ dec: 217, hex: 'D9', html: '', char: '┘' }));

    it(`DA's result is correct`, () =>
      expect(getASCIIItemForHex('DA', ASCIIEncoding.CP437)).toEqual({ dec: 218, hex: 'DA', html: '', char: '┌' }));

    it(`DB's result is correct`, () =>
      expect(getASCIIItemForHex('DB', ASCIIEncoding.CP437)).toEqual({ dec: 219, hex: 'DB', html: '', char: '█' }));

    it(`DC's result is correct`, () =>
      expect(getASCIIItemForHex('DC', ASCIIEncoding.CP437)).toEqual({ dec: 220, hex: 'DC', html: '', char: '▄' }));

    it(`DD's result is correct`, () =>
      expect(getASCIIItemForHex('DD', ASCIIEncoding.CP437)).toEqual({ dec: 221, hex: 'DD', html: '', char: '▌' }));

    it(`DE's result is correct`, () =>
      expect(getASCIIItemForHex('DE', ASCIIEncoding.CP437)).toEqual({ dec: 222, hex: 'DE', html: '', char: '▐' }));

    it(`DF's result is correct`, () =>
      expect(getASCIIItemForHex('DF', ASCIIEncoding.CP437)).toEqual({ dec: 223, hex: 'DF', html: '', char: '▀' }));

    it(`E0's result is correct`, () =>
      expect(getASCIIItemForHex('E0', ASCIIEncoding.CP437)).toEqual({ dec: 224, hex: 'E0', html: '', char: 'α' }));

    it(`E1's result is correct`, () =>
      expect(getASCIIItemForHex('E1', ASCIIEncoding.CP437)).toEqual({ dec: 225, hex: 'E1', html: '', char: 'ß' }));

    it(`E2's result is correct`, () =>
      expect(getASCIIItemForHex('E2', ASCIIEncoding.CP437)).toEqual({ dec: 226, hex: 'E2', html: '', char: 'Γ' }));

    it(`E3's result is correct`, () =>
      expect(getASCIIItemForHex('E3', ASCIIEncoding.CP437)).toEqual({ dec: 227, hex: 'E3', html: '', char: 'π' }));

    it(`E4's result is correct`, () =>
      expect(getASCIIItemForHex('E4', ASCIIEncoding.CP437)).toEqual({ dec: 228, hex: 'E4', html: '', char: 'Σ' }));

    it(`E5's result is correct`, () =>
      expect(getASCIIItemForHex('E5', ASCIIEncoding.CP437)).toEqual({ dec: 229, hex: 'E5', html: '', char: 'σ' }));

    it(`E6's result is correct`, () =>
      expect(getASCIIItemForHex('E6', ASCIIEncoding.CP437)).toEqual({ dec: 230, hex: 'E6', html: '', char: 'µ' }));

    it(`E7's result is correct`, () =>
      expect(getASCIIItemForHex('E7', ASCIIEncoding.CP437)).toEqual({ dec: 231, hex: 'E7', html: '', char: 'τ' }));

    it(`E8's result is correct`, () =>
      expect(getASCIIItemForHex('E8', ASCIIEncoding.CP437)).toEqual({ dec: 232, hex: 'E8', html: '', char: 'Φ' }));

    it(`E9's result is correct`, () =>
      expect(getASCIIItemForHex('E9', ASCIIEncoding.CP437)).toEqual({ dec: 233, hex: 'E9', html: '', char: 'Θ' }));

    it(`EA's result is correct`, () =>
      expect(getASCIIItemForHex('EA', ASCIIEncoding.CP437)).toEqual({ dec: 234, hex: 'EA', html: '', char: 'Ω' }));

    it(`EB's result is correct`, () =>
      expect(getASCIIItemForHex('EB', ASCIIEncoding.CP437)).toEqual({ dec: 235, hex: 'EB', html: '', char: 'δ' }));

    it(`EC's result is correct`, () =>
      expect(getASCIIItemForHex('EC', ASCIIEncoding.CP437)).toEqual({ dec: 236, hex: 'EC', html: '', char: '∞' }));

    it(`ED's result is correct`, () =>
      expect(getASCIIItemForHex('ED', ASCIIEncoding.CP437)).toEqual({ dec: 237, hex: 'ED', html: '', char: 'φ' }));

    it(`EE's result is correct`, () =>
      expect(getASCIIItemForHex('EE', ASCIIEncoding.CP437)).toEqual({ dec: 238, hex: 'EE', html: '', char: 'ε' }));

    it(`EF's result is correct`, () =>
      expect(getASCIIItemForHex('EF', ASCIIEncoding.CP437)).toEqual({ dec: 239, hex: 'EF', html: '', char: '∩' }));

    it(`F0's result is correct`, () =>
      expect(getASCIIItemForHex('F0', ASCIIEncoding.CP437)).toEqual({ dec: 240, hex: 'F0', html: '', char: '≡' }));

    it(`F1's result is correct`, () =>
      expect(getASCIIItemForHex('F1', ASCIIEncoding.CP437)).toEqual({ dec: 241, hex: 'F1', html: '', char: '±' }));

    it(`F2's result is correct`, () =>
      expect(getASCIIItemForHex('F2', ASCIIEncoding.CP437)).toEqual({ dec: 242, hex: 'F2', html: '', char: '≥' }));

    it(`F3's result is correct`, () =>
      expect(getASCIIItemForHex('F3', ASCIIEncoding.CP437)).toEqual({ dec: 243, hex: 'F3', html: '', char: '≤' }));

    it(`F4's result is correct`, () =>
      expect(getASCIIItemForHex('F4', ASCIIEncoding.CP437)).toEqual({ dec: 244, hex: 'F4', html: '', char: '⌠' }));

    it(`F5's result is correct`, () =>
      expect(getASCIIItemForHex('F5', ASCIIEncoding.CP437)).toEqual({ dec: 245, hex: 'F5', html: '', char: '⌡' }));

    it(`F6's result is correct`, () =>
      expect(getASCIIItemForHex('F6', ASCIIEncoding.CP437)).toEqual({ dec: 246, hex: 'F6', html: '', char: '÷' }));

    it(`F7's result is correct`, () =>
      expect(getASCIIItemForHex('F7', ASCIIEncoding.CP437)).toEqual({ dec: 247, hex: 'F7', html: '', char: '≈' }));

    it(`F8's result is correct`, () =>
      expect(getASCIIItemForHex('F8', ASCIIEncoding.CP437)).toEqual({ dec: 248, hex: 'F8', html: '', char: '°' }));

    it(`F9's result is correct`, () =>
      expect(getASCIIItemForHex('F9', ASCIIEncoding.CP437)).toEqual({ dec: 249, hex: 'F9', html: '', char: '∙' }));

    it(`FA's result is correct`, () =>
      expect(getASCIIItemForHex('FA', ASCIIEncoding.CP437)).toEqual({ dec: 250, hex: 'FA', html: '', char: '·' }));

    it(`FB's result is correct`, () =>
      expect(getASCIIItemForHex('FB', ASCIIEncoding.CP437)).toEqual({ dec: 251, hex: 'FB', html: '', char: '√' }));

    it(`FC's result is correct`, () =>
      expect(getASCIIItemForHex('FC', ASCIIEncoding.CP437)).toEqual({ dec: 252, hex: 'FC', html: '', char: 'ⁿ' }));

    it(`FD's result is correct`, () =>
      expect(getASCIIItemForHex('FD', ASCIIEncoding.CP437)).toEqual({ dec: 253, hex: 'FD', html: '', char: '²' }));

    it(`FE's result is correct`, () =>
      expect(getASCIIItemForHex('FE', ASCIIEncoding.CP437)).toEqual({ dec: 254, hex: 'FE', html: '', char: '■' }));

    // CP437 255 char doesn't seem to be one we can save
    // it(`FF's result is correct`, () =>
    //   expect(getASCIIItemForHex('FF', ASCIIEncoding.CP437)).toEqual({ dec: 255, hex: 'FF', html: '', char: ' ' }));
  });

  describe('UTF-8 Extended Codes', () => {
    it(`80's result is correct`, () =>
      // This should be  and has been seen working in the browser but not when using karma strangely

      expect(getASCIIItemForHex('80', ASCIIEncoding.UTF8)).toEqual({
        dec: 128,
        hex: '80',
        html: '',
        char: String.fromCharCode(128),
      }));

    it(`81's result is correct`, () =>
      expect(getASCIIItemForHex('81', ASCIIEncoding.UTF8)).toEqual({ dec: 129, hex: '81', html: '', char: '' }));

    it(`82's result is correct`, () =>
      expect(getASCIIItemForHex('82', ASCIIEncoding.UTF8)).toEqual({ dec: 130, hex: '82', html: '', char: '' }));

    it(`83's result is correct`, () =>
      expect(getASCIIItemForHex('83', ASCIIEncoding.UTF8)).toEqual({ dec: 131, hex: '83', html: '', char: '' }));

    it(`84's result is correct`, () =>
      expect(getASCIIItemForHex('84', ASCIIEncoding.UTF8)).toEqual({ dec: 132, hex: '84', html: '', char: '' }));

    it(`85's result is correct`, () =>
      expect(getASCIIItemForHex('85', ASCIIEncoding.UTF8)).toEqual({ dec: 133, hex: '85', html: '', char: '' }));

    it(`86's result is correct`, () =>
      expect(getASCIIItemForHex('86', ASCIIEncoding.UTF8)).toEqual({ dec: 134, hex: '86', html: '', char: '' }));

    it(`87's result is correct`, () =>
      expect(getASCIIItemForHex('87', ASCIIEncoding.UTF8)).toEqual({ dec: 135, hex: '87', html: '', char: '' }));

    it(`88's result is correct`, () =>
      expect(getASCIIItemForHex('88', ASCIIEncoding.UTF8)).toEqual({ dec: 136, hex: '88', html: '', char: '' }));

    it(`89's result is correct`, () =>
      expect(getASCIIItemForHex('89', ASCIIEncoding.UTF8)).toEqual({ dec: 137, hex: '89', html: '', char: '' }));

    it(`8A's result is correct`, () =>
      expect(getASCIIItemForHex('8A', ASCIIEncoding.UTF8)).toEqual({ dec: 138, hex: '8A', html: '', char: '' }));

    it(`8B's result is correct`, () =>
      expect(getASCIIItemForHex('8B', ASCIIEncoding.UTF8)).toEqual({ dec: 139, hex: '8B', html: '', char: '' }));

    it(`8C's result is correct`, () =>
      expect(getASCIIItemForHex('8C', ASCIIEncoding.UTF8)).toEqual({ dec: 140, hex: '8C', html: '', char: '' }));

    it(`8D's result is correct`, () =>
      expect(getASCIIItemForHex('8D', ASCIIEncoding.UTF8)).toEqual({ dec: 141, hex: '8D', html: '', char: '' }));

    it(`8E's result is correct`, () =>
      expect(getASCIIItemForHex('8E', ASCIIEncoding.UTF8)).toEqual({ dec: 142, hex: '8E', html: '', char: '' }));

    it(`8F's result is correct`, () =>
      expect(getASCIIItemForHex('8F', ASCIIEncoding.UTF8)).toEqual({ dec: 143, hex: '8F', html: '', char: '' }));

    it(`90's result is correct`, () =>
      expect(getASCIIItemForHex('90', ASCIIEncoding.UTF8)).toEqual({ dec: 144, hex: '90', html: '', char: '' }));

    it(`92's result is correct`, () =>
      expect(getASCIIItemForHex('92', ASCIIEncoding.UTF8)).toEqual({ dec: 146, hex: '92', html: '', char: '' }));

    it(`93's result is correct`, () =>
      expect(getASCIIItemForHex('93', ASCIIEncoding.UTF8)).toEqual({ dec: 147, hex: '93', html: '', char: '' }));

    it(`94's result is correct`, () =>
      expect(getASCIIItemForHex('94', ASCIIEncoding.UTF8)).toEqual({ dec: 148, hex: '94', html: '', char: '' }));

    it(`95's result is correct`, () =>
      expect(getASCIIItemForHex('95', ASCIIEncoding.UTF8)).toEqual({ dec: 149, hex: '95', html: '', char: '' }));

    it(`96's result is correct`, () =>
      expect(getASCIIItemForHex('96', ASCIIEncoding.UTF8)).toEqual({ dec: 150, hex: '96', html: '', char: '' }));

    it(`97's result is correct`, () =>
      expect(getASCIIItemForHex('97', ASCIIEncoding.UTF8)).toEqual({ dec: 151, hex: '97', html: '', char: '' }));

    it(`98's result is correct`, () =>
      expect(getASCIIItemForHex('98', ASCIIEncoding.UTF8)).toEqual({ dec: 152, hex: '98', html: '', char: '' }));

    it(`99's result is correct`, () =>
      expect(getASCIIItemForHex('99', ASCIIEncoding.UTF8)).toEqual({ dec: 153, hex: '99', html: '', char: '' }));

    it(`9A's result is correct`, () =>
      expect(getASCIIItemForHex('9A', ASCIIEncoding.UTF8)).toEqual({ dec: 154, hex: '9A', html: '', char: '' }));

    it(`9B's result is correct`, () =>
      expect(getASCIIItemForHex('9B', ASCIIEncoding.UTF8)).toEqual({ dec: 155, hex: '9B', html: '', char: '' }));

    it(`9C's result is correct`, () =>
      expect(getASCIIItemForHex('9C', ASCIIEncoding.UTF8)).toEqual({ dec: 156, hex: '9C', html: '', char: '' }));

    it(`9D's result is correct`, () =>
      expect(getASCIIItemForHex('9D', ASCIIEncoding.UTF8)).toEqual({ dec: 157, hex: '9D', html: '', char: '' }));

    it(`9E's result is correct`, () =>
      expect(getASCIIItemForHex('9E', ASCIIEncoding.UTF8)).toEqual({ dec: 158, hex: '9E', html: '', char: '' }));

    it(`9F's result is correct`, () =>
      expect(getASCIIItemForHex('9F', ASCIIEncoding.UTF8)).toEqual({ dec: 159, hex: '9F', html: '', char: '' }));

    it(`A0's result is correct`, () =>
      expect(getASCIIItemForHex('A0', ASCIIEncoding.UTF8)).toEqual({ dec: 160, hex: 'A0', html: '&#160;', char: ' ' }));

    it(`A1's result is correct`, () =>
      expect(getASCIIItemForHex('A1', ASCIIEncoding.UTF8)).toEqual({ dec: 161, hex: 'A1', html: '&#161;', char: '¡' }));

    it(`A2's result is correct`, () =>
      expect(getASCIIItemForHex('A2', ASCIIEncoding.UTF8)).toEqual({ dec: 162, hex: 'A2', html: '&#162;', char: '¢' }));

    it(`A3's result is correct`, () =>
      expect(getASCIIItemForHex('A3', ASCIIEncoding.UTF8)).toEqual({ dec: 163, hex: 'A3', html: '&#163;', char: '£' }));

    it(`A4's result is correct`, () =>
      expect(getASCIIItemForHex('A4', ASCIIEncoding.UTF8)).toEqual({ dec: 164, hex: 'A4', html: '&#164;', char: '¤' }));

    it(`A5's result is correct`, () =>
      expect(getASCIIItemForHex('A5', ASCIIEncoding.UTF8)).toEqual({ dec: 165, hex: 'A5', html: '&#165;', char: '¥' }));

    it(`A6's result is correct`, () =>
      expect(getASCIIItemForHex('A6', ASCIIEncoding.UTF8)).toEqual({ dec: 166, hex: 'A6', html: '&#166;', char: '¦' }));

    it(`A7's result is correct`, () =>
      expect(getASCIIItemForHex('A7', ASCIIEncoding.UTF8)).toEqual({ dec: 167, hex: 'A7', html: '&#167;', char: '§' }));

    it(`A8's result is correct`, () =>
      expect(getASCIIItemForHex('A8', ASCIIEncoding.UTF8)).toEqual({ dec: 168, hex: 'A8', html: '&#168;', char: '¨' }));

    it(`A9's result is correct`, () =>
      expect(getASCIIItemForHex('A9', ASCIIEncoding.UTF8)).toEqual({ dec: 169, hex: 'A9', html: '&#169;', char: '©' }));

    it(`AA's result is correct`, () =>
      expect(getASCIIItemForHex('AA', ASCIIEncoding.UTF8)).toEqual({ dec: 170, hex: 'AA', html: '&#170;', char: 'ª' }));

    it(`AB's result is correct`, () =>
      expect(getASCIIItemForHex('AB', ASCIIEncoding.UTF8)).toEqual({ dec: 171, hex: 'AB', html: '&#171;', char: '«' }));

    it(`AC's result is correct`, () =>
      expect(getASCIIItemForHex('AC', ASCIIEncoding.UTF8)).toEqual({ dec: 172, hex: 'AC', html: '&#172;', char: '¬' }));

    it(`AD's result is correct`, () =>
      expect(getASCIIItemForHex('AD', ASCIIEncoding.UTF8)).toEqual({ dec: 173, hex: 'AD', html: '&#173;', char: '­' }));

    it(`AE's result is correct`, () =>
      expect(getASCIIItemForHex('AE', ASCIIEncoding.UTF8)).toEqual({ dec: 174, hex: 'AE', html: '&#174;', char: '®' }));

    it(`AF's result is correct`, () =>
      expect(getASCIIItemForHex('AF', ASCIIEncoding.UTF8)).toEqual({ dec: 175, hex: 'AF', html: '&#175;', char: '¯' }));

    it(`B0's result is correct`, () =>
      expect(getASCIIItemForHex('B0', ASCIIEncoding.UTF8)).toEqual({ dec: 176, hex: 'B0', html: '&#176;', char: '°' }));

    it(`B1's result is correct`, () =>
      expect(getASCIIItemForHex('B1', ASCIIEncoding.UTF8)).toEqual({ dec: 177, hex: 'B1', html: '&#177;', char: '±' }));

    it(`B2's result is correct`, () =>
      expect(getASCIIItemForHex('B2', ASCIIEncoding.UTF8)).toEqual({ dec: 178, hex: 'B2', html: '&#178;', char: '²' }));

    it(`B3's result is correct`, () =>
      expect(getASCIIItemForHex('B3', ASCIIEncoding.UTF8)).toEqual({ dec: 179, hex: 'B3', html: '&#179;', char: '³' }));

    it(`B4's result is correct`, () =>
      expect(getASCIIItemForHex('B4', ASCIIEncoding.UTF8)).toEqual({ dec: 180, hex: 'B4', html: '&#180;', char: '´' }));

    it(`B5's result is correct`, () =>
      expect(getASCIIItemForHex('B5', ASCIIEncoding.UTF8)).toEqual({ dec: 181, hex: 'B5', html: '&#181;', char: 'µ' }));

    it(`B6's result is correct`, () =>
      expect(getASCIIItemForHex('B6', ASCIIEncoding.UTF8)).toEqual({ dec: 182, hex: 'B6', html: '&#182;', char: '¶' }));

    it(`B7's result is correct`, () =>
      expect(getASCIIItemForHex('B7', ASCIIEncoding.UTF8)).toEqual({ dec: 183, hex: 'B7', html: '&#183;', char: '·' }));

    it(`B8's result is correct`, () =>
      expect(getASCIIItemForHex('B8', ASCIIEncoding.UTF8)).toEqual({ dec: 184, hex: 'B8', html: '&#184;', char: '¸' }));

    it(`B9's result is correct`, () =>
      expect(getASCIIItemForHex('B9', ASCIIEncoding.UTF8)).toEqual({ dec: 185, hex: 'B9', html: '&#185;', char: '¹' }));

    it(`BA's result is correct`, () =>
      expect(getASCIIItemForHex('BA', ASCIIEncoding.UTF8)).toEqual({ dec: 186, hex: 'BA', html: '&#186;', char: 'º' }));

    it(`BB's result is correct`, () =>
      expect(getASCIIItemForHex('BB', ASCIIEncoding.UTF8)).toEqual({ dec: 187, hex: 'BB', html: '&#187;', char: '»' }));

    it(`BC's result is correct`, () =>
      expect(getASCIIItemForHex('BC', ASCIIEncoding.UTF8)).toEqual({ dec: 188, hex: 'BC', html: '&#188;', char: '¼' }));

    it(`BD's result is correct`, () =>
      expect(getASCIIItemForHex('BD', ASCIIEncoding.UTF8)).toEqual({ dec: 189, hex: 'BD', html: '&#189;', char: '½' }));

    it(`BE's result is correct`, () =>
      expect(getASCIIItemForHex('BE', ASCIIEncoding.UTF8)).toEqual({ dec: 190, hex: 'BE', html: '&#190;', char: '¾' }));

    it(`BF's result is correct`, () =>
      expect(getASCIIItemForHex('BF', ASCIIEncoding.UTF8)).toEqual({ dec: 191, hex: 'BF', html: '&#191;', char: '¿' }));

    it(`C0's result is correct`, () =>
      expect(getASCIIItemForHex('C0', ASCIIEncoding.UTF8)).toEqual({ dec: 192, hex: 'C0', html: '&#192;', char: 'À' }));

    it(`C1's result is correct`, () =>
      expect(getASCIIItemForHex('C1', ASCIIEncoding.UTF8)).toEqual({ dec: 193, hex: 'C1', html: '&#193;', char: 'Á' }));

    it(`C2's result is correct`, () =>
      expect(getASCIIItemForHex('C2', ASCIIEncoding.UTF8)).toEqual({ dec: 194, hex: 'C2', html: '&#194;', char: 'Â' }));

    it(`C3's result is correct`, () =>
      expect(getASCIIItemForHex('C3', ASCIIEncoding.UTF8)).toEqual({ dec: 195, hex: 'C3', html: '&#195;', char: 'Ã' }));

    it(`C4's result is correct`, () =>
      expect(getASCIIItemForHex('C4', ASCIIEncoding.UTF8)).toEqual({ dec: 196, hex: 'C4', html: '&#196;', char: 'Ä' }));

    it(`C5's result is correct`, () =>
      expect(getASCIIItemForHex('C5', ASCIIEncoding.UTF8)).toEqual({ dec: 197, hex: 'C5', html: '&#197;', char: 'Å' }));

    it(`C6's result is correct`, () =>
      expect(getASCIIItemForHex('C6', ASCIIEncoding.UTF8)).toEqual({ dec: 198, hex: 'C6', html: '&#198;', char: 'Æ' }));

    it(`C7's result is correct`, () =>
      expect(getASCIIItemForHex('C7', ASCIIEncoding.UTF8)).toEqual({ dec: 199, hex: 'C7', html: '&#199;', char: 'Ç' }));

    it(`C8's result is correct`, () =>
      expect(getASCIIItemForHex('C8', ASCIIEncoding.UTF8)).toEqual({ dec: 200, hex: 'C8', html: '&#200;', char: 'È' }));

    it(`C9's result is correct`, () =>
      expect(getASCIIItemForHex('C9', ASCIIEncoding.UTF8)).toEqual({ dec: 201, hex: 'C9', html: '&#201;', char: 'É' }));

    it(`CA's result is correct`, () =>
      expect(getASCIIItemForHex('CA', ASCIIEncoding.UTF8)).toEqual({ dec: 202, hex: 'CA', html: '&#202;', char: 'Ê' }));

    it(`CB's result is correct`, () =>
      expect(getASCIIItemForHex('CB', ASCIIEncoding.UTF8)).toEqual({ dec: 203, hex: 'CB', html: '&#203;', char: 'Ë' }));

    it(`CC's result is correct`, () =>
      expect(getASCIIItemForHex('CC', ASCIIEncoding.UTF8)).toEqual({ dec: 204, hex: 'CC', html: '&#204;', char: 'Ì' }));

    it(`CD's result is correct`, () =>
      expect(getASCIIItemForHex('CD', ASCIIEncoding.UTF8)).toEqual({ dec: 205, hex: 'CD', html: '&#205;', char: 'Í' }));

    it(`CE's result is correct`, () =>
      expect(getASCIIItemForHex('CE', ASCIIEncoding.UTF8)).toEqual({ dec: 206, hex: 'CE', html: '&#206;', char: 'Î' }));

    it(`CF's result is correct`, () =>
      expect(getASCIIItemForHex('CF', ASCIIEncoding.UTF8)).toEqual({ dec: 207, hex: 'CF', html: '&#207;', char: 'Ï' }));

    it(`D0's result is correct`, () =>
      expect(getASCIIItemForHex('D0', ASCIIEncoding.UTF8)).toEqual({ dec: 208, hex: 'D0', html: '&#208;', char: 'Ð' }));

    it(`D1's result is correct`, () =>
      expect(getASCIIItemForHex('D1', ASCIIEncoding.UTF8)).toEqual({ dec: 209, hex: 'D1', html: '&#209;', char: 'Ñ' }));

    it(`D2's result is correct`, () =>
      expect(getASCIIItemForHex('D2', ASCIIEncoding.UTF8)).toEqual({ dec: 210, hex: 'D2', html: '&#210;', char: 'Ò' }));

    it(`D3's result is correct`, () =>
      expect(getASCIIItemForHex('D3', ASCIIEncoding.UTF8)).toEqual({ dec: 211, hex: 'D3', html: '&#211;', char: 'Ó' }));

    it(`D4's result is correct`, () =>
      expect(getASCIIItemForHex('D4', ASCIIEncoding.UTF8)).toEqual({ dec: 212, hex: 'D4', html: '&#212;', char: 'Ô' }));

    it(`D5's result is correct`, () =>
      expect(getASCIIItemForHex('D5', ASCIIEncoding.UTF8)).toEqual({ dec: 213, hex: 'D5', html: '&#213;', char: 'Õ' }));

    it(`D6's result is correct`, () =>
      expect(getASCIIItemForHex('D6', ASCIIEncoding.UTF8)).toEqual({ dec: 214, hex: 'D6', html: '&#214;', char: 'Ö' }));

    it(`D7's result is correct`, () =>
      expect(getASCIIItemForHex('D7', ASCIIEncoding.UTF8)).toEqual({ dec: 215, hex: 'D7', html: '&#215;', char: '×' }));

    it(`D8's result is correct`, () =>
      expect(getASCIIItemForHex('D8', ASCIIEncoding.UTF8)).toEqual({ dec: 216, hex: 'D8', html: '&#216;', char: 'Ø' }));

    it(`D9's result is correct`, () =>
      expect(getASCIIItemForHex('D9', ASCIIEncoding.UTF8)).toEqual({ dec: 217, hex: 'D9', html: '&#217;', char: 'Ù' }));

    it(`DA's result is correct`, () =>
      expect(getASCIIItemForHex('DA', ASCIIEncoding.UTF8)).toEqual({ dec: 218, hex: 'DA', html: '&#218;', char: 'Ú' }));

    it(`DB's result is correct`, () =>
      expect(getASCIIItemForHex('DB', ASCIIEncoding.UTF8)).toEqual({ dec: 219, hex: 'DB', html: '&#219;', char: 'Û' }));

    it(`DC's result is correct`, () =>
      expect(getASCIIItemForHex('DC', ASCIIEncoding.UTF8)).toEqual({ dec: 220, hex: 'DC', html: '&#220;', char: 'Ü' }));

    it(`DD's result is correct`, () =>
      expect(getASCIIItemForHex('DD', ASCIIEncoding.UTF8)).toEqual({ dec: 221, hex: 'DD', html: '&#221;', char: 'Ý' }));

    it(`DE's result is correct`, () =>
      expect(getASCIIItemForHex('DE', ASCIIEncoding.UTF8)).toEqual({ dec: 222, hex: 'DE', html: '&#222;', char: 'Þ' }));

    it(`DF's result is correct`, () =>
      expect(getASCIIItemForHex('DF', ASCIIEncoding.UTF8)).toEqual({ dec: 223, hex: 'DF', html: '&#223;', char: 'ß' }));

    it(`E0's result is correct`, () =>
      expect(getASCIIItemForHex('E0', ASCIIEncoding.UTF8)).toEqual({ dec: 224, hex: 'E0', html: '&#224;', char: 'à' }));

    it(`E1's result is correct`, () =>
      expect(getASCIIItemForHex('E1', ASCIIEncoding.UTF8)).toEqual({ dec: 225, hex: 'E1', html: '&#225;', char: 'á' }));

    it(`E2's result is correct`, () =>
      expect(getASCIIItemForHex('E2', ASCIIEncoding.UTF8)).toEqual({ dec: 226, hex: 'E2', html: '&#226;', char: 'â' }));

    it(`E3's result is correct`, () =>
      expect(getASCIIItemForHex('E3', ASCIIEncoding.UTF8)).toEqual({ dec: 227, hex: 'E3', html: '&#227;', char: 'ã' }));

    it(`E4's result is correct`, () =>
      expect(getASCIIItemForHex('E4', ASCIIEncoding.UTF8)).toEqual({ dec: 228, hex: 'E4', html: '&#228;', char: 'ä' }));

    it(`E5's result is correct`, () =>
      expect(getASCIIItemForHex('E5', ASCIIEncoding.UTF8)).toEqual({ dec: 229, hex: 'E5', html: '&#229;', char: 'å' }));

    it(`E6's result is correct`, () =>
      expect(getASCIIItemForHex('E6', ASCIIEncoding.UTF8)).toEqual({ dec: 230, hex: 'E6', html: '&#230;', char: 'æ' }));

    it(`E7's result is correct`, () =>
      expect(getASCIIItemForHex('E7', ASCIIEncoding.UTF8)).toEqual({ dec: 231, hex: 'E7', html: '&#231;', char: 'ç' }));

    it(`E8's result is correct`, () =>
      expect(getASCIIItemForHex('E8', ASCIIEncoding.UTF8)).toEqual({ dec: 232, hex: 'E8', html: '&#232;', char: 'è' }));

    it(`E9's result is correct`, () =>
      expect(getASCIIItemForHex('E9', ASCIIEncoding.UTF8)).toEqual({ dec: 233, hex: 'E9', html: '&#233;', char: 'é' }));

    it(`EA's result is correct`, () =>
      expect(getASCIIItemForHex('EA', ASCIIEncoding.UTF8)).toEqual({ dec: 234, hex: 'EA', html: '&#234;', char: 'ê' }));

    it(`EB's result is correct`, () =>
      expect(getASCIIItemForHex('EB', ASCIIEncoding.UTF8)).toEqual({ dec: 235, hex: 'EB', html: '&#235;', char: 'ë' }));

    it(`EC's result is correct`, () =>
      expect(getASCIIItemForHex('EC', ASCIIEncoding.UTF8)).toEqual({ dec: 236, hex: 'EC', html: '&#236;', char: 'ì' }));

    it(`ED's result is correct`, () =>
      expect(getASCIIItemForHex('ED', ASCIIEncoding.UTF8)).toEqual({ dec: 237, hex: 'ED', html: '&#237;', char: 'í' }));

    it(`EE's result is correct`, () =>
      expect(getASCIIItemForHex('EE', ASCIIEncoding.UTF8)).toEqual({ dec: 238, hex: 'EE', html: '&#238;', char: 'î' }));

    it(`EF's result is correct`, () =>
      expect(getASCIIItemForHex('EF', ASCIIEncoding.UTF8)).toEqual({ dec: 239, hex: 'EF', html: '&#239;', char: 'ï' }));

    it(`F0's result is correct`, () =>
      expect(getASCIIItemForHex('F0', ASCIIEncoding.UTF8)).toEqual({ dec: 240, hex: 'F0', html: '&#240;', char: 'ð' }));

    it(`F1's result is correct`, () =>
      expect(getASCIIItemForHex('F1', ASCIIEncoding.UTF8)).toEqual({ dec: 241, hex: 'F1', html: '&#241;', char: 'ñ' }));

    it(`F2's result is correct`, () =>
      expect(getASCIIItemForHex('F2', ASCIIEncoding.UTF8)).toEqual({ dec: 242, hex: 'F2', html: '&#242;', char: 'ò' }));

    it(`F3's result is correct`, () =>
      expect(getASCIIItemForHex('F3', ASCIIEncoding.UTF8)).toEqual({ dec: 243, hex: 'F3', html: '&#243;', char: 'ó' }));

    it(`F4's result is correct`, () =>
      expect(getASCIIItemForHex('F4', ASCIIEncoding.UTF8)).toEqual({ dec: 244, hex: 'F4', html: '&#244;', char: 'ô' }));

    it(`F5's result is correct`, () =>
      expect(getASCIIItemForHex('F5', ASCIIEncoding.UTF8)).toEqual({ dec: 245, hex: 'F5', html: '&#245;', char: 'õ' }));

    it(`F6's result is correct`, () =>
      expect(getASCIIItemForHex('F6', ASCIIEncoding.UTF8)).toEqual({ dec: 246, hex: 'F6', html: '&#246;', char: 'ö' }));

    it(`F7's result is correct`, () =>
      expect(getASCIIItemForHex('F7', ASCIIEncoding.UTF8)).toEqual({ dec: 247, hex: 'F7', html: '&#247;', char: '÷' }));

    it(`F8's result is correct`, () =>
      expect(getASCIIItemForHex('F8', ASCIIEncoding.UTF8)).toEqual({ dec: 248, hex: 'F8', html: '&#248;', char: 'ø' }));

    it(`F9's result is correct`, () =>
      expect(getASCIIItemForHex('F9', ASCIIEncoding.UTF8)).toEqual({ dec: 249, hex: 'F9', html: '&#249;', char: 'ù' }));

    it(`FA's result is correct`, () =>
      expect(getASCIIItemForHex('FA', ASCIIEncoding.UTF8)).toEqual({ dec: 250, hex: 'FA', html: '&#250;', char: 'ú' }));

    it(`FB's result is correct`, () =>
      expect(getASCIIItemForHex('FB', ASCIIEncoding.UTF8)).toEqual({ dec: 251, hex: 'FB', html: '&#251;', char: 'û' }));

    it(`FC's result is correct`, () =>
      expect(getASCIIItemForHex('FC', ASCIIEncoding.UTF8)).toEqual({ dec: 252, hex: 'FC', html: '&#252;', char: 'ü' }));

    it(`FD's result is correct`, () =>
      expect(getASCIIItemForHex('FD', ASCIIEncoding.UTF8)).toEqual({ dec: 253, hex: 'FD', html: '&#253;', char: 'ý' }));

    it(`FE's result is correct`, () =>
      expect(getASCIIItemForHex('FE', ASCIIEncoding.UTF8)).toEqual({ dec: 254, hex: 'FE', html: '&#254;', char: 'þ' }));

    it(`FF's result is correct`, () =>
      expect(getASCIIItemForHex('FF', ASCIIEncoding.UTF8)).toEqual({ dec: 255, hex: 'FF', html: '&#255;', char: 'ÿ' }));
  });

  describe('ISO Extended Codes', () => {
    it(`80's result is correct`, () =>
      expect(getASCIIItemForHex('80', ASCIIEncoding.ISO88591)).toEqual({ dec: 128, hex: '80', html: '', char: '€' }));
  });
});
