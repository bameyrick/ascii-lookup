import { getASCIIItemForDecimal, ASCIIEncoding } from '../src';

describe('getASCIIItemForDecimal()', () => {
  describe('Standard codes', () => {
    it(`0's result is correct`, () => expect(getASCIIItemForDecimal(0)).toEqual({ dec: 0, hex: '00', html: '&#0;', char: '\0' }));

    it(`1's result is correct`, () => expect(getASCIIItemForDecimal(1)).toEqual({ dec: 1, hex: '01', html: '&#1;', char: '\u0001' }));

    it(`2's result is correct`, () => expect(getASCIIItemForDecimal(2)).toEqual({ dec: 2, hex: '02', html: '&#2;', char: '\u0002' }));

    it(`3's result is correct`, () => expect(getASCIIItemForDecimal(3)).toEqual({ dec: 3, hex: '03', html: '&#3;', char: '\u0003' }));

    it(`4's result is correct`, () => expect(getASCIIItemForDecimal(4)).toEqual({ dec: 4, hex: '04', html: '&#4;', char: '\u0004' }));

    it(`5's result is correct`, () => expect(getASCIIItemForDecimal(5)).toEqual({ dec: 5, hex: '05', html: '&#5;', char: '\u0005' }));

    it(`6's result is correct`, () => expect(getASCIIItemForDecimal(6)).toEqual({ dec: 6, hex: '06', html: '&#6;', char: '\u0006' }));

    it(`7's result is correct`, () => expect(getASCIIItemForDecimal(7)).toEqual({ dec: 7, hex: '07', html: '&#7;', char: '\u0007' }));

    it(`8's result is correct`, () => expect(getASCIIItemForDecimal(8)).toEqual({ dec: 8, hex: '08', html: '&#8;', char: '\u0008' }));

    it(`9's result is correct`, () => expect(getASCIIItemForDecimal(9)).toEqual({ dec: 9, hex: '09', html: '&#9;', char: '\u0009' }));

    it(`10's result is correct`, () => expect(getASCIIItemForDecimal(10)).toEqual({ dec: 10, hex: '0A', html: '&#10;', char: '\n' }));

    it(`11's result is correct`, () => expect(getASCIIItemForDecimal(11)).toEqual({ dec: 11, hex: '0B', html: '&#11;', char: '\v' }));

    it(`12's result is correct`, () => expect(getASCIIItemForDecimal(12)).toEqual({ dec: 12, hex: '0C', html: '&#12;', char: '\f' }));

    it(`13's result is correct`, () => expect(getASCIIItemForDecimal(13)).toEqual({ dec: 13, hex: '0D', html: '&#13;', char: '\r' }));

    it(`14's result is correct`, () => expect(getASCIIItemForDecimal(14)).toEqual({ dec: 14, hex: '0E', html: '&#14;', char: '\u000E' }));

    it(`15's result is correct`, () => expect(getASCIIItemForDecimal(15)).toEqual({ dec: 15, hex: '0F', html: '&#15;', char: '\u000F' }));

    it(`16's result is correct`, () => expect(getASCIIItemForDecimal(16)).toEqual({ dec: 16, hex: '10', html: '&#16;', char: '\u0010' }));

    it(`17's result is correct`, () => expect(getASCIIItemForDecimal(17)).toEqual({ dec: 17, hex: '11', html: '&#17;', char: '\u0011' }));

    it(`18's result is correct`, () => expect(getASCIIItemForDecimal(18)).toEqual({ dec: 18, hex: '12', html: '&#18;', char: '\u0012' }));

    it(`19's result is correct`, () => expect(getASCIIItemForDecimal(19)).toEqual({ dec: 19, hex: '13', html: '&#19;', char: '\u0013' }));

    it(`20's result is correct`, () => expect(getASCIIItemForDecimal(20)).toEqual({ dec: 20, hex: '14', html: '&#20;', char: '\u0014' }));

    it(`21's result is correct`, () => expect(getASCIIItemForDecimal(21)).toEqual({ dec: 21, hex: '15', html: '&#21;', char: '\u0015' }));

    it(`22's result is correct`, () => expect(getASCIIItemForDecimal(22)).toEqual({ dec: 22, hex: '16', html: '&#22;', char: '\u0016' }));

    it(`23's result is correct`, () => expect(getASCIIItemForDecimal(23)).toEqual({ dec: 23, hex: '17', html: '&#23;', char: '\u0017' }));

    it(`24's result is correct`, () => expect(getASCIIItemForDecimal(24)).toEqual({ dec: 24, hex: '18', html: '&#24;', char: '\u0018' }));

    it(`25's result is correct`, () => expect(getASCIIItemForDecimal(25)).toEqual({ dec: 25, hex: '19', html: '&#25;', char: '\u0019' }));

    it(`26's result is correct`, () => expect(getASCIIItemForDecimal(26)).toEqual({ dec: 26, hex: '1A', html: '&#26;', char: '\u001A' }));

    it(`27's result is correct`, () => expect(getASCIIItemForDecimal(27)).toEqual({ dec: 27, hex: '1B', html: '&#27;', char: '\u001B' }));

    it(`28's result is correct`, () => expect(getASCIIItemForDecimal(28)).toEqual({ dec: 28, hex: '1C', html: '&#28;', char: '\u001C' }));

    it(`29's result is correct`, () => expect(getASCIIItemForDecimal(29)).toEqual({ dec: 29, hex: '1D', html: '&#29;', char: '\u001D' }));

    it(`30's result is correct`, () => expect(getASCIIItemForDecimal(30)).toEqual({ dec: 30, hex: '1E', html: '&#30;', char: '\u001E' }));

    it(`31's result is correct`, () => expect(getASCIIItemForDecimal(31)).toEqual({ dec: 31, hex: '1F', html: '&#31;', char: '\u001F' }));

    it(`32's result is correct`, () => expect(getASCIIItemForDecimal(32)).toEqual({ dec: 32, hex: '20', html: '&#32;', char: ' ' }));

    it(`33's result is correct`, () => expect(getASCIIItemForDecimal(33)).toEqual({ dec: 33, hex: '21', html: '&#33;', char: '!' }));

    it(`34's result is correct`, () => expect(getASCIIItemForDecimal(34)).toEqual({ dec: 34, hex: '22', html: '&#34;', char: '"' }));

    it(`35's result is correct`, () => expect(getASCIIItemForDecimal(35)).toEqual({ dec: 35, hex: '23', html: '&#35;', char: '#' }));

    it(`36's result is correct`, () => expect(getASCIIItemForDecimal(36)).toEqual({ dec: 36, hex: '24', html: '&#36;', char: '$' }));

    it(`37's result is correct`, () => expect(getASCIIItemForDecimal(37)).toEqual({ dec: 37, hex: '25', html: '&#37;', char: '%' }));

    it(`38's result is correct`, () => expect(getASCIIItemForDecimal(38)).toEqual({ dec: 38, hex: '26', html: '&#38;', char: '&' }));

    it(`39's result is correct`, () => expect(getASCIIItemForDecimal(39)).toEqual({ dec: 39, hex: '27', html: '&#39;', char: `'` }));

    it(`40's result is correct`, () => expect(getASCIIItemForDecimal(40)).toEqual({ dec: 40, hex: '28', html: '&#40;', char: '(' }));

    it(`41's result is correct`, () => expect(getASCIIItemForDecimal(41)).toEqual({ dec: 41, hex: '29', html: '&#41;', char: ')' }));

    it(`42's result is correct`, () => expect(getASCIIItemForDecimal(42)).toEqual({ dec: 42, hex: '2A', html: '&#42;', char: '*' }));

    it(`43's result is correct`, () => expect(getASCIIItemForDecimal(43)).toEqual({ dec: 43, hex: '2B', html: '&#43;', char: '+' }));

    it(`44's result is correct`, () => expect(getASCIIItemForDecimal(44)).toEqual({ dec: 44, hex: '2C', html: '&#44;', char: ',' }));

    it(`45's result is correct`, () => expect(getASCIIItemForDecimal(45)).toEqual({ dec: 45, hex: '2D', html: '&#45;', char: '-' }));

    it(`46's result is correct`, () => expect(getASCIIItemForDecimal(46)).toEqual({ dec: 46, hex: '2E', html: '&#46;', char: '.' }));

    it(`47's result is correct`, () => expect(getASCIIItemForDecimal(47)).toEqual({ dec: 47, hex: '2F', html: '&#47;', char: '/' }));

    it(`48's result is correct`, () => expect(getASCIIItemForDecimal(48)).toEqual({ dec: 48, hex: '30', html: '&#48;', char: '0' }));

    it(`49's result is correct`, () => expect(getASCIIItemForDecimal(49)).toEqual({ dec: 49, hex: '31', html: '&#49;', char: '1' }));

    it(`50's result is correct`, () => expect(getASCIIItemForDecimal(50)).toEqual({ dec: 50, hex: '32', html: '&#50;', char: '2' }));

    it(`51's result is correct`, () => expect(getASCIIItemForDecimal(51)).toEqual({ dec: 51, hex: '33', html: '&#51;', char: '3' }));

    it(`52's result is correct`, () => expect(getASCIIItemForDecimal(52)).toEqual({ dec: 52, hex: '34', html: '&#52;', char: '4' }));

    it(`53's result is correct`, () => expect(getASCIIItemForDecimal(53)).toEqual({ dec: 53, hex: '35', html: '&#53;', char: '5' }));

    it(`54's result is correct`, () => expect(getASCIIItemForDecimal(54)).toEqual({ dec: 54, hex: '36', html: '&#54;', char: '6' }));

    it(`55's result is correct`, () => expect(getASCIIItemForDecimal(55)).toEqual({ dec: 55, hex: '37', html: '&#55;', char: '7' }));

    it(`56's result is correct`, () => expect(getASCIIItemForDecimal(56)).toEqual({ dec: 56, hex: '38', html: '&#56;', char: '8' }));

    it(`57's result is correct`, () => expect(getASCIIItemForDecimal(57)).toEqual({ dec: 57, hex: '39', html: '&#57;', char: '9' }));

    it(`58's result is correct`, () => expect(getASCIIItemForDecimal(58)).toEqual({ dec: 58, hex: '3A', html: '&#58;', char: ':' }));

    it(`59's result is correct`, () => expect(getASCIIItemForDecimal(59)).toEqual({ dec: 59, hex: '3B', html: '&#59;', char: ';' }));

    it(`60's result is correct`, () => expect(getASCIIItemForDecimal(60)).toEqual({ dec: 60, hex: '3C', html: '&#60;', char: '<' }));

    it(`61's result is correct`, () => expect(getASCIIItemForDecimal(61)).toEqual({ dec: 61, hex: '3D', html: '&#61;', char: '=' }));

    it(`62's result is correct`, () => expect(getASCIIItemForDecimal(62)).toEqual({ dec: 62, hex: '3E', html: '&#62;', char: '>' }));

    it(`63's result is correct`, () => expect(getASCIIItemForDecimal(63)).toEqual({ dec: 63, hex: '3F', html: '&#63;', char: '?' }));

    it(`64's result is correct`, () => expect(getASCIIItemForDecimal(64)).toEqual({ dec: 64, hex: '40', html: '&#64;', char: '@' }));

    it(`65's result is correct`, () => expect(getASCIIItemForDecimal(65)).toEqual({ dec: 65, hex: '41', html: '&#65;', char: 'A' }));

    it(`66's result is correct`, () => expect(getASCIIItemForDecimal(66)).toEqual({ dec: 66, hex: '42', html: '&#66;', char: 'B' }));

    it(`67's result is correct`, () => expect(getASCIIItemForDecimal(67)).toEqual({ dec: 67, hex: '43', html: '&#67;', char: 'C' }));

    it(`68's result is correct`, () => expect(getASCIIItemForDecimal(68)).toEqual({ dec: 68, hex: '44', html: '&#68;', char: 'D' }));

    it(`69's result is correct`, () => expect(getASCIIItemForDecimal(69)).toEqual({ dec: 69, hex: '45', html: '&#69;', char: 'E' }));

    it(`70's result is correct`, () => expect(getASCIIItemForDecimal(70)).toEqual({ dec: 70, hex: '46', html: '&#70;', char: 'F' }));

    it(`71's result is correct`, () => expect(getASCIIItemForDecimal(71)).toEqual({ dec: 71, hex: '47', html: '&#71;', char: 'G' }));

    it(`72's result is correct`, () => expect(getASCIIItemForDecimal(72)).toEqual({ dec: 72, hex: '48', html: '&#72;', char: 'H' }));

    it(`73's result is correct`, () => expect(getASCIIItemForDecimal(73)).toEqual({ dec: 73, hex: '49', html: '&#73;', char: 'I' }));

    it(`74's result is correct`, () => expect(getASCIIItemForDecimal(74)).toEqual({ dec: 74, hex: '4A', html: '&#74;', char: 'J' }));

    it(`75's result is correct`, () => expect(getASCIIItemForDecimal(75)).toEqual({ dec: 75, hex: '4B', html: '&#75;', char: 'K' }));

    it(`76's result is correct`, () => expect(getASCIIItemForDecimal(76)).toEqual({ dec: 76, hex: '4C', html: '&#76;', char: 'L' }));

    it(`77's result is correct`, () => expect(getASCIIItemForDecimal(77)).toEqual({ dec: 77, hex: '4D', html: '&#77;', char: 'M' }));

    it(`78's result is correct`, () => expect(getASCIIItemForDecimal(78)).toEqual({ dec: 78, hex: '4E', html: '&#78;', char: 'N' }));

    it(`79's result is correct`, () => expect(getASCIIItemForDecimal(79)).toEqual({ dec: 79, hex: '4F', html: '&#79;', char: 'O' }));

    it(`80's result is correct`, () => expect(getASCIIItemForDecimal(80)).toEqual({ dec: 80, hex: '50', html: '&#80;', char: 'P' }));

    it(`81's result is correct`, () => expect(getASCIIItemForDecimal(81)).toEqual({ dec: 81, hex: '51', html: '&#81;', char: 'Q' }));

    it(`82's result is correct`, () => expect(getASCIIItemForDecimal(82)).toEqual({ dec: 82, hex: '52', html: '&#82;', char: 'R' }));

    it(`83's result is correct`, () => expect(getASCIIItemForDecimal(83)).toEqual({ dec: 83, hex: '53', html: '&#83;', char: 'S' }));

    it(`84's result is correct`, () => expect(getASCIIItemForDecimal(84)).toEqual({ dec: 84, hex: '54', html: '&#84;', char: 'T' }));

    it(`85's result is correct`, () => expect(getASCIIItemForDecimal(85)).toEqual({ dec: 85, hex: '55', html: '&#85;', char: 'U' }));

    it(`86's result is correct`, () => expect(getASCIIItemForDecimal(86)).toEqual({ dec: 86, hex: '56', html: '&#86;', char: 'V' }));

    it(`87's result is correct`, () => expect(getASCIIItemForDecimal(87)).toEqual({ dec: 87, hex: '57', html: '&#87;', char: 'W' }));

    it(`88's result is correct`, () => expect(getASCIIItemForDecimal(88)).toEqual({ dec: 88, hex: '58', html: '&#88;', char: 'X' }));

    it(`89's result is correct`, () => expect(getASCIIItemForDecimal(89)).toEqual({ dec: 89, hex: '59', html: '&#89;', char: 'Y' }));

    it(`90's result is correct`, () => expect(getASCIIItemForDecimal(90)).toEqual({ dec: 90, hex: '5A', html: '&#90;', char: 'Z' }));

    it(`91's result is correct`, () => expect(getASCIIItemForDecimal(91)).toEqual({ dec: 91, hex: '5B', html: '&#91;', char: '[' }));

    it(`92's result is correct`, () => expect(getASCIIItemForDecimal(92)).toEqual({ dec: 92, hex: '5C', html: '&#92;', char: '\\' }));

    it(`93's result is correct`, () => expect(getASCIIItemForDecimal(93)).toEqual({ dec: 93, hex: '5D', html: '&#93;', char: ']' }));

    it(`94's result is correct`, () => expect(getASCIIItemForDecimal(94)).toEqual({ dec: 94, hex: '5E', html: '&#94;', char: '^' }));

    it(`95's result is correct`, () => expect(getASCIIItemForDecimal(95)).toEqual({ dec: 95, hex: '5F', html: '&#95;', char: '_' }));

    it(`96's result is correct`, () => expect(getASCIIItemForDecimal(96)).toEqual({ dec: 96, hex: '60', html: '&#96;', char: '`' }));

    it(`97's result is correct`, () => expect(getASCIIItemForDecimal(97)).toEqual({ dec: 97, hex: '61', html: '&#97;', char: 'a' }));

    it(`98's result is correct`, () => expect(getASCIIItemForDecimal(98)).toEqual({ dec: 98, hex: '62', html: '&#98;', char: 'b' }));

    it(`99's result is correct`, () => expect(getASCIIItemForDecimal(99)).toEqual({ dec: 99, hex: '63', html: '&#99;', char: 'c' }));

    it(`100's result is correct`, () => expect(getASCIIItemForDecimal(100)).toEqual({ dec: 100, hex: '64', html: '&#100;', char: 'd' }));

    it(`101's result is correct`, () => expect(getASCIIItemForDecimal(101)).toEqual({ dec: 101, hex: '65', html: '&#101;', char: 'e' }));

    it(`102's result is correct`, () => expect(getASCIIItemForDecimal(102)).toEqual({ dec: 102, hex: '66', html: '&#102;', char: 'f' }));

    it(`103's result is correct`, () => expect(getASCIIItemForDecimal(103)).toEqual({ dec: 103, hex: '67', html: '&#103;', char: 'g' }));

    it(`104's result is correct`, () => expect(getASCIIItemForDecimal(104)).toEqual({ dec: 104, hex: '68', html: '&#104;', char: 'h' }));

    it(`105's result is correct`, () => expect(getASCIIItemForDecimal(105)).toEqual({ dec: 105, hex: '69', html: '&#105;', char: 'i' }));

    it(`106's result is correct`, () => expect(getASCIIItemForDecimal(106)).toEqual({ dec: 106, hex: '6A', html: '&#106;', char: 'j' }));

    it(`107's result is correct`, () => expect(getASCIIItemForDecimal(107)).toEqual({ dec: 107, hex: '6B', html: '&#107;', char: 'k' }));

    it(`108's result is correct`, () => expect(getASCIIItemForDecimal(108)).toEqual({ dec: 108, hex: '6C', html: '&#108;', char: 'l' }));

    it(`109's result is correct`, () => expect(getASCIIItemForDecimal(109)).toEqual({ dec: 109, hex: '6D', html: '&#109;', char: 'm' }));

    it(`110's result is correct`, () => expect(getASCIIItemForDecimal(110)).toEqual({ dec: 110, hex: '6E', html: '&#110;', char: 'n' }));

    it(`111's result is correct`, () => expect(getASCIIItemForDecimal(111)).toEqual({ dec: 111, hex: '6F', html: '&#111;', char: 'o' }));

    it(`112's result is correct`, () => expect(getASCIIItemForDecimal(112)).toEqual({ dec: 112, hex: '70', html: '&#112;', char: 'p' }));

    it(`113's result is correct`, () => expect(getASCIIItemForDecimal(113)).toEqual({ dec: 113, hex: '71', html: '&#113;', char: 'q' }));

    it(`114's result is correct`, () => expect(getASCIIItemForDecimal(114)).toEqual({ dec: 114, hex: '72', html: '&#114;', char: 'r' }));

    it(`115's result is correct`, () => expect(getASCIIItemForDecimal(115)).toEqual({ dec: 115, hex: '73', html: '&#115;', char: 's' }));

    it(`116's result is correct`, () => expect(getASCIIItemForDecimal(116)).toEqual({ dec: 116, hex: '74', html: '&#116;', char: 't' }));

    it(`117's result is correct`, () => expect(getASCIIItemForDecimal(117)).toEqual({ dec: 117, hex: '75', html: '&#117;', char: 'u' }));

    it(`118's result is correct`, () => expect(getASCIIItemForDecimal(118)).toEqual({ dec: 118, hex: '76', html: '&#118;', char: 'v' }));

    it(`119's result is correct`, () => expect(getASCIIItemForDecimal(119)).toEqual({ dec: 119, hex: '77', html: '&#119;', char: 'w' }));

    it(`120's result is correct`, () => expect(getASCIIItemForDecimal(120)).toEqual({ dec: 120, hex: '78', html: '&#120;', char: 'x' }));

    it(`121's result is correct`, () => expect(getASCIIItemForDecimal(121)).toEqual({ dec: 121, hex: '79', html: '&#121;', char: 'y' }));

    it(`122's result is correct`, () => expect(getASCIIItemForDecimal(122)).toEqual({ dec: 122, hex: '7A', html: '&#122;', char: 'z' }));

    it(`123's result is correct`, () => expect(getASCIIItemForDecimal(123)).toEqual({ dec: 123, hex: '7B', html: '&#123;', char: '{' }));

    it(`124's result is correct`, () => expect(getASCIIItemForDecimal(124)).toEqual({ dec: 124, hex: '7C', html: '&#124;', char: '|' }));

    it(`125's result is correct`, () => expect(getASCIIItemForDecimal(125)).toEqual({ dec: 125, hex: '7D', html: '&#125;', char: '}' }));

    it(`126's result is correct`, () => expect(getASCIIItemForDecimal(126)).toEqual({ dec: 126, hex: '7E', html: '&#126;', char: '~' }));

    it(`127's result is correct`, () => expect(getASCIIItemForDecimal(127)).toEqual({ dec: 127, hex: '7F', html: '&#127;', char: '' }));
  });

  describe('CP437 Extended Codes', () => {
    it(`128's result is correct`, () =>
      expect(getASCIIItemForDecimal(128, ASCIIEncoding.CP437)).toEqual({ dec: 128, hex: '80', html: '', char: 'Ç' }));

    it(`129's result is correct`, () =>
      expect(getASCIIItemForDecimal(129, ASCIIEncoding.CP437)).toEqual({ dec: 129, hex: '81', html: '', char: 'ü' }));

    it(`130's result is correct`, () =>
      expect(getASCIIItemForDecimal(130, ASCIIEncoding.CP437)).toEqual({ dec: 130, hex: '82', html: '', char: 'é' }));

    it(`131's result is correct`, () =>
      expect(getASCIIItemForDecimal(131, ASCIIEncoding.CP437)).toEqual({ dec: 131, hex: '83', html: '', char: 'â' }));

    it(`132's result is correct`, () =>
      expect(getASCIIItemForDecimal(132, ASCIIEncoding.CP437)).toEqual({ dec: 132, hex: '84', html: '', char: 'ä' }));

    it(`133's result is correct`, () =>
      expect(getASCIIItemForDecimal(133, ASCIIEncoding.CP437)).toEqual({ dec: 133, hex: '85', html: '', char: 'à' }));

    it(`134's result is correct`, () =>
      expect(getASCIIItemForDecimal(134, ASCIIEncoding.CP437)).toEqual({ dec: 134, hex: '86', html: '', char: 'å' }));

    it(`135's result is correct`, () =>
      expect(getASCIIItemForDecimal(135, ASCIIEncoding.CP437)).toEqual({ dec: 135, hex: '87', html: '', char: 'ç' }));

    it(`136's result is correct`, () =>
      expect(getASCIIItemForDecimal(136, ASCIIEncoding.CP437)).toEqual({ dec: 136, hex: '88', html: '', char: 'ê' }));

    it(`137's result is correct`, () =>
      expect(getASCIIItemForDecimal(137, ASCIIEncoding.CP437)).toEqual({ dec: 137, hex: '89', html: '', char: 'ë' }));

    it(`138's result is correct`, () =>
      expect(getASCIIItemForDecimal(138, ASCIIEncoding.CP437)).toEqual({ dec: 138, hex: '8A', html: '', char: 'è' }));

    it(`139's result is correct`, () =>
      expect(getASCIIItemForDecimal(139, ASCIIEncoding.CP437)).toEqual({ dec: 139, hex: '8B', html: '', char: 'ï' }));

    it(`140's result is correct`, () =>
      expect(getASCIIItemForDecimal(140, ASCIIEncoding.CP437)).toEqual({ dec: 140, hex: '8C', html: '', char: 'î' }));

    it(`141's result is correct`, () =>
      expect(getASCIIItemForDecimal(141, ASCIIEncoding.CP437)).toEqual({ dec: 141, hex: '8D', html: '', char: 'ì' }));

    it(`142's result is correct`, () =>
      expect(getASCIIItemForDecimal(142, ASCIIEncoding.CP437)).toEqual({ dec: 142, hex: '8E', html: '', char: 'Ä' }));

    it(`143's result is correct`, () =>
      expect(getASCIIItemForDecimal(143, ASCIIEncoding.CP437)).toEqual({ dec: 143, hex: '8F', html: '', char: 'Å' }));

    it(`144's result is correct`, () =>
      expect(getASCIIItemForDecimal(144, ASCIIEncoding.CP437)).toEqual({ dec: 144, hex: '90', html: '', char: 'É' }));

    it(`145's result is correct`, () =>
      expect(getASCIIItemForDecimal(145, ASCIIEncoding.CP437)).toEqual({ dec: 145, hex: '91', html: '', char: 'æ' }));

    it(`146's result is correct`, () =>
      expect(getASCIIItemForDecimal(146, ASCIIEncoding.CP437)).toEqual({ dec: 146, hex: '92', html: '', char: 'Æ' }));

    it(`147's result is correct`, () =>
      expect(getASCIIItemForDecimal(147, ASCIIEncoding.CP437)).toEqual({ dec: 147, hex: '93', html: '', char: 'ô' }));

    it(`148's result is correct`, () =>
      expect(getASCIIItemForDecimal(148, ASCIIEncoding.CP437)).toEqual({ dec: 148, hex: '94', html: '', char: 'ö' }));

    it(`149's result is correct`, () =>
      expect(getASCIIItemForDecimal(149, ASCIIEncoding.CP437)).toEqual({ dec: 149, hex: '95', html: '', char: 'ò' }));

    it(`150's result is correct`, () =>
      expect(getASCIIItemForDecimal(150, ASCIIEncoding.CP437)).toEqual({ dec: 150, hex: '96', html: '', char: 'û' }));

    it(`151's result is correct`, () =>
      expect(getASCIIItemForDecimal(151, ASCIIEncoding.CP437)).toEqual({ dec: 151, hex: '97', html: '', char: 'ù' }));

    it(`152's result is correct`, () =>
      expect(getASCIIItemForDecimal(152, ASCIIEncoding.CP437)).toEqual({ dec: 152, hex: '98', html: '', char: 'ÿ' }));

    it(`153's result is correct`, () =>
      expect(getASCIIItemForDecimal(153, ASCIIEncoding.CP437)).toEqual({ dec: 153, hex: '99', html: '', char: 'Ö' }));

    it(`154's result is correct`, () =>
      expect(getASCIIItemForDecimal(154, ASCIIEncoding.CP437)).toEqual({ dec: 154, hex: '9A', html: '', char: 'Ü' }));

    it(`155's result is correct`, () =>
      expect(getASCIIItemForDecimal(155, ASCIIEncoding.CP437)).toEqual({ dec: 155, hex: '9B', html: '', char: '¢' }));

    it(`156's result is correct`, () =>
      expect(getASCIIItemForDecimal(156, ASCIIEncoding.CP437)).toEqual({ dec: 156, hex: '9C', html: '', char: '£' }));

    it(`157's result is correct`, () =>
      expect(getASCIIItemForDecimal(157, ASCIIEncoding.CP437)).toEqual({ dec: 157, hex: '9D', html: '', char: '¥' }));

    it(`158's result is correct`, () =>
      expect(getASCIIItemForDecimal(158, ASCIIEncoding.CP437)).toEqual({ dec: 158, hex: '9E', html: '', char: '₧' }));

    it(`159's result is correct`, () =>
      expect(getASCIIItemForDecimal(159, ASCIIEncoding.CP437)).toEqual({ dec: 159, hex: '9F', html: '', char: 'ƒ' }));

    it(`160's result is correct`, () =>
      expect(getASCIIItemForDecimal(160, ASCIIEncoding.CP437)).toEqual({ dec: 160, hex: 'A0', html: '', char: 'á' }));

    it(`161's result is correct`, () =>
      expect(getASCIIItemForDecimal(161, ASCIIEncoding.CP437)).toEqual({ dec: 161, hex: 'A1', html: '', char: 'í' }));

    it(`162's result is correct`, () =>
      expect(getASCIIItemForDecimal(162, ASCIIEncoding.CP437)).toEqual({ dec: 162, hex: 'A2', html: '', char: 'ó' }));

    it(`163's result is correct`, () =>
      expect(getASCIIItemForDecimal(163, ASCIIEncoding.CP437)).toEqual({ dec: 163, hex: 'A3', html: '', char: 'ú' }));

    it(`164's result is correct`, () =>
      expect(getASCIIItemForDecimal(164, ASCIIEncoding.CP437)).toEqual({ dec: 164, hex: 'A4', html: '', char: 'ñ' }));

    it(`165's result is correct`, () =>
      expect(getASCIIItemForDecimal(165, ASCIIEncoding.CP437)).toEqual({ dec: 165, hex: 'A5', html: '', char: 'Ñ' }));

    it(`166's result is correct`, () =>
      expect(getASCIIItemForDecimal(166, ASCIIEncoding.CP437)).toEqual({ dec: 166, hex: 'A6', html: '', char: 'ª' }));

    it(`167's result is correct`, () =>
      expect(getASCIIItemForDecimal(167, ASCIIEncoding.CP437)).toEqual({ dec: 167, hex: 'A7', html: '', char: 'º' }));

    it(`168's result is correct`, () =>
      expect(getASCIIItemForDecimal(168, ASCIIEncoding.CP437)).toEqual({ dec: 168, hex: 'A8', html: '', char: '¿' }));

    it(`169's result is correct`, () =>
      expect(getASCIIItemForDecimal(169, ASCIIEncoding.CP437)).toEqual({ dec: 169, hex: 'A9', html: '', char: '⌐' }));

    it(`170's result is correct`, () =>
      expect(getASCIIItemForDecimal(170, ASCIIEncoding.CP437)).toEqual({ dec: 170, hex: 'AA', html: '', char: '¬' }));

    it(`171's result is correct`, () =>
      expect(getASCIIItemForDecimal(171, ASCIIEncoding.CP437)).toEqual({ dec: 171, hex: 'AB', html: '', char: '½' }));

    it(`172's result is correct`, () =>
      expect(getASCIIItemForDecimal(172, ASCIIEncoding.CP437)).toEqual({ dec: 172, hex: 'AC', html: '', char: '¼' }));

    it(`173's result is correct`, () =>
      expect(getASCIIItemForDecimal(173, ASCIIEncoding.CP437)).toEqual({ dec: 173, hex: 'AD', html: '', char: '¡' }));

    it(`174's result is correct`, () =>
      expect(getASCIIItemForDecimal(174, ASCIIEncoding.CP437)).toEqual({ dec: 174, hex: 'AE', html: '', char: '«' }));

    it(`175's result is correct`, () =>
      expect(getASCIIItemForDecimal(175, ASCIIEncoding.CP437)).toEqual({ dec: 175, hex: 'AF', html: '', char: '»' }));

    it(`176's result is correct`, () =>
      expect(getASCIIItemForDecimal(176, ASCIIEncoding.CP437)).toEqual({ dec: 176, hex: 'B0', html: '', char: '░' }));

    it(`177's result is correct`, () =>
      expect(getASCIIItemForDecimal(177, ASCIIEncoding.CP437)).toEqual({ dec: 177, hex: 'B1', html: '', char: '▒' }));

    it(`178's result is correct`, () =>
      expect(getASCIIItemForDecimal(178, ASCIIEncoding.CP437)).toEqual({ dec: 178, hex: 'B2', html: '', char: '▓' }));

    it(`179's result is correct`, () =>
      expect(getASCIIItemForDecimal(179, ASCIIEncoding.CP437)).toEqual({ dec: 179, hex: 'B3', html: '', char: '│' }));

    it(`180's result is correct`, () =>
      expect(getASCIIItemForDecimal(180, ASCIIEncoding.CP437)).toEqual({ dec: 180, hex: 'B4', html: '', char: '┤' }));

    it(`181's result is correct`, () =>
      expect(getASCIIItemForDecimal(181, ASCIIEncoding.CP437)).toEqual({ dec: 181, hex: 'B5', html: '', char: '╡' }));

    it(`182's result is correct`, () =>
      expect(getASCIIItemForDecimal(182, ASCIIEncoding.CP437)).toEqual({ dec: 182, hex: 'B6', html: '', char: '╢' }));

    it(`183's result is correct`, () =>
      expect(getASCIIItemForDecimal(183, ASCIIEncoding.CP437)).toEqual({ dec: 183, hex: 'B7', html: '', char: '╖' }));

    it(`184's result is correct`, () =>
      expect(getASCIIItemForDecimal(184, ASCIIEncoding.CP437)).toEqual({ dec: 184, hex: 'B8', html: '', char: '╕' }));

    it(`185's result is correct`, () =>
      expect(getASCIIItemForDecimal(185, ASCIIEncoding.CP437)).toEqual({ dec: 185, hex: 'B9', html: '', char: '╣' }));

    it(`186's result is correct`, () =>
      expect(getASCIIItemForDecimal(186, ASCIIEncoding.CP437)).toEqual({ dec: 186, hex: 'BA', html: '', char: '║' }));

    it(`187's result is correct`, () =>
      expect(getASCIIItemForDecimal(187, ASCIIEncoding.CP437)).toEqual({ dec: 187, hex: 'BB', html: '', char: '╗' }));

    it(`188's result is correct`, () =>
      expect(getASCIIItemForDecimal(188, ASCIIEncoding.CP437)).toEqual({ dec: 188, hex: 'BC', html: '', char: '╝' }));

    it(`189's result is correct`, () =>
      expect(getASCIIItemForDecimal(189, ASCIIEncoding.CP437)).toEqual({ dec: 189, hex: 'BD', html: '', char: '╜' }));

    it(`190's result is correct`, () =>
      expect(getASCIIItemForDecimal(190, ASCIIEncoding.CP437)).toEqual({ dec: 190, hex: 'BE', html: '', char: '╛' }));

    it(`191's result is correct`, () =>
      expect(getASCIIItemForDecimal(191, ASCIIEncoding.CP437)).toEqual({ dec: 191, hex: 'BF', html: '', char: '┐' }));

    it(`192's result is correct`, () =>
      expect(getASCIIItemForDecimal(192, ASCIIEncoding.CP437)).toEqual({ dec: 192, hex: 'C0', html: '', char: '└' }));

    it(`193's result is correct`, () =>
      expect(getASCIIItemForDecimal(193, ASCIIEncoding.CP437)).toEqual({ dec: 193, hex: 'C1', html: '', char: '┴' }));

    it(`194's result is correct`, () =>
      expect(getASCIIItemForDecimal(194, ASCIIEncoding.CP437)).toEqual({ dec: 194, hex: 'C2', html: '', char: '┬' }));

    it(`195's result is correct`, () =>
      expect(getASCIIItemForDecimal(195, ASCIIEncoding.CP437)).toEqual({ dec: 195, hex: 'C3', html: '', char: '├' }));

    it(`196's result is correct`, () =>
      expect(getASCIIItemForDecimal(196, ASCIIEncoding.CP437)).toEqual({ dec: 196, hex: 'C4', html: '', char: '─' }));

    it(`197's result is correct`, () =>
      expect(getASCIIItemForDecimal(197, ASCIIEncoding.CP437)).toEqual({ dec: 197, hex: 'C5', html: '', char: '┼' }));

    it(`198's result is correct`, () =>
      expect(getASCIIItemForDecimal(198, ASCIIEncoding.CP437)).toEqual({ dec: 198, hex: 'C6', html: '', char: '╞' }));

    it(`199's result is correct`, () =>
      expect(getASCIIItemForDecimal(199, ASCIIEncoding.CP437)).toEqual({ dec: 199, hex: 'C7', html: '', char: '╟' }));

    it(`200's result is correct`, () =>
      expect(getASCIIItemForDecimal(200, ASCIIEncoding.CP437)).toEqual({ dec: 200, hex: 'C8', html: '', char: '╚' }));

    it(`201's result is correct`, () =>
      expect(getASCIIItemForDecimal(201, ASCIIEncoding.CP437)).toEqual({ dec: 201, hex: 'C9', html: '', char: '╔' }));

    it(`202's result is correct`, () =>
      expect(getASCIIItemForDecimal(202, ASCIIEncoding.CP437)).toEqual({ dec: 202, hex: 'CA', html: '', char: '╩' }));

    it(`203's result is correct`, () =>
      expect(getASCIIItemForDecimal(203, ASCIIEncoding.CP437)).toEqual({ dec: 203, hex: 'CB', html: '', char: '╦' }));

    it(`204's result is correct`, () =>
      expect(getASCIIItemForDecimal(204, ASCIIEncoding.CP437)).toEqual({ dec: 204, hex: 'CC', html: '', char: '╠' }));

    it(`205's result is correct`, () =>
      expect(getASCIIItemForDecimal(205, ASCIIEncoding.CP437)).toEqual({ dec: 205, hex: 'CD', html: '', char: '═' }));

    it(`206's result is correct`, () =>
      expect(getASCIIItemForDecimal(206, ASCIIEncoding.CP437)).toEqual({ dec: 206, hex: 'CE', html: '', char: '╬' }));

    it(`207's result is correct`, () =>
      expect(getASCIIItemForDecimal(207, ASCIIEncoding.CP437)).toEqual({ dec: 207, hex: 'CF', html: '', char: '╧' }));

    it(`208's result is correct`, () =>
      expect(getASCIIItemForDecimal(208, ASCIIEncoding.CP437)).toEqual({ dec: 208, hex: 'D0', html: '', char: '╨' }));

    it(`209's result is correct`, () =>
      expect(getASCIIItemForDecimal(209, ASCIIEncoding.CP437)).toEqual({ dec: 209, hex: 'D1', html: '', char: '╤' }));

    it(`210's result is correct`, () =>
      expect(getASCIIItemForDecimal(210, ASCIIEncoding.CP437)).toEqual({ dec: 210, hex: 'D2', html: '', char: '╥' }));

    it(`211's result is correct`, () =>
      expect(getASCIIItemForDecimal(211, ASCIIEncoding.CP437)).toEqual({ dec: 211, hex: 'D3', html: '', char: '╙' }));

    it(`212's result is correct`, () =>
      expect(getASCIIItemForDecimal(212, ASCIIEncoding.CP437)).toEqual({ dec: 212, hex: 'D4', html: '', char: '╘' }));

    it(`213's result is correct`, () =>
      expect(getASCIIItemForDecimal(213, ASCIIEncoding.CP437)).toEqual({ dec: 213, hex: 'D5', html: '', char: '╒' }));

    it(`214's result is correct`, () =>
      expect(getASCIIItemForDecimal(214, ASCIIEncoding.CP437)).toEqual({ dec: 214, hex: 'D6', html: '', char: '╓' }));

    it(`215's result is correct`, () =>
      expect(getASCIIItemForDecimal(215, ASCIIEncoding.CP437)).toEqual({ dec: 215, hex: 'D7', html: '', char: '╫' }));

    it(`216's result is correct`, () =>
      expect(getASCIIItemForDecimal(216, ASCIIEncoding.CP437)).toEqual({ dec: 216, hex: 'D8', html: '', char: '╪' }));

    it(`217's result is correct`, () =>
      expect(getASCIIItemForDecimal(217, ASCIIEncoding.CP437)).toEqual({ dec: 217, hex: 'D9', html: '', char: '┘' }));

    it(`218's result is correct`, () =>
      expect(getASCIIItemForDecimal(218, ASCIIEncoding.CP437)).toEqual({ dec: 218, hex: 'DA', html: '', char: '┌' }));

    it(`219's result is correct`, () =>
      expect(getASCIIItemForDecimal(219, ASCIIEncoding.CP437)).toEqual({ dec: 219, hex: 'DB', html: '', char: '█' }));

    it(`220's result is correct`, () =>
      expect(getASCIIItemForDecimal(220, ASCIIEncoding.CP437)).toEqual({ dec: 220, hex: 'DC', html: '', char: '▄' }));

    it(`221's result is correct`, () =>
      expect(getASCIIItemForDecimal(221, ASCIIEncoding.CP437)).toEqual({ dec: 221, hex: 'DD', html: '', char: '▌' }));

    it(`222's result is correct`, () =>
      expect(getASCIIItemForDecimal(222, ASCIIEncoding.CP437)).toEqual({ dec: 222, hex: 'DE', html: '', char: '▐' }));

    it(`223's result is correct`, () =>
      expect(getASCIIItemForDecimal(223, ASCIIEncoding.CP437)).toEqual({ dec: 223, hex: 'DF', html: '', char: '▀' }));

    it(`224's result is correct`, () =>
      expect(getASCIIItemForDecimal(224, ASCIIEncoding.CP437)).toEqual({ dec: 224, hex: 'E0', html: '', char: 'α' }));

    it(`225's result is correct`, () =>
      expect(getASCIIItemForDecimal(225, ASCIIEncoding.CP437)).toEqual({ dec: 225, hex: 'E1', html: '', char: 'ß' }));

    it(`226's result is correct`, () =>
      expect(getASCIIItemForDecimal(226, ASCIIEncoding.CP437)).toEqual({ dec: 226, hex: 'E2', html: '', char: 'Γ' }));

    it(`227's result is correct`, () =>
      expect(getASCIIItemForDecimal(227, ASCIIEncoding.CP437)).toEqual({ dec: 227, hex: 'E3', html: '', char: 'π' }));

    it(`228's result is correct`, () =>
      expect(getASCIIItemForDecimal(228, ASCIIEncoding.CP437)).toEqual({ dec: 228, hex: 'E4', html: '', char: 'Σ' }));

    it(`229's result is correct`, () =>
      expect(getASCIIItemForDecimal(229, ASCIIEncoding.CP437)).toEqual({ dec: 229, hex: 'E5', html: '', char: 'σ' }));

    it(`230's result is correct`, () =>
      expect(getASCIIItemForDecimal(230, ASCIIEncoding.CP437)).toEqual({ dec: 230, hex: 'E6', html: '', char: 'µ' }));

    it(`231's result is correct`, () =>
      expect(getASCIIItemForDecimal(231, ASCIIEncoding.CP437)).toEqual({ dec: 231, hex: 'E7', html: '', char: 'τ' }));

    it(`232's result is correct`, () =>
      expect(getASCIIItemForDecimal(232, ASCIIEncoding.CP437)).toEqual({ dec: 232, hex: 'E8', html: '', char: 'Φ' }));

    it(`233's result is correct`, () =>
      expect(getASCIIItemForDecimal(233, ASCIIEncoding.CP437)).toEqual({ dec: 233, hex: 'E9', html: '', char: 'Θ' }));

    it(`234's result is correct`, () =>
      expect(getASCIIItemForDecimal(234, ASCIIEncoding.CP437)).toEqual({ dec: 234, hex: 'EA', html: '', char: 'Ω' }));

    it(`235's result is correct`, () =>
      expect(getASCIIItemForDecimal(235, ASCIIEncoding.CP437)).toEqual({ dec: 235, hex: 'EB', html: '', char: 'δ' }));

    it(`236's result is correct`, () =>
      expect(getASCIIItemForDecimal(236, ASCIIEncoding.CP437)).toEqual({ dec: 236, hex: 'EC', html: '', char: '∞' }));

    it(`237's result is correct`, () =>
      expect(getASCIIItemForDecimal(237, ASCIIEncoding.CP437)).toEqual({ dec: 237, hex: 'ED', html: '', char: 'φ' }));

    it(`238's result is correct`, () =>
      expect(getASCIIItemForDecimal(238, ASCIIEncoding.CP437)).toEqual({ dec: 238, hex: 'EE', html: '', char: 'ε' }));

    it(`239's result is correct`, () =>
      expect(getASCIIItemForDecimal(239, ASCIIEncoding.CP437)).toEqual({ dec: 239, hex: 'EF', html: '', char: '∩' }));

    it(`240's result is correct`, () =>
      expect(getASCIIItemForDecimal(240, ASCIIEncoding.CP437)).toEqual({ dec: 240, hex: 'F0', html: '', char: '≡' }));

    it(`241's result is correct`, () =>
      expect(getASCIIItemForDecimal(241, ASCIIEncoding.CP437)).toEqual({ dec: 241, hex: 'F1', html: '', char: '±' }));

    it(`242's result is correct`, () =>
      expect(getASCIIItemForDecimal(242, ASCIIEncoding.CP437)).toEqual({ dec: 242, hex: 'F2', html: '', char: '≥' }));

    it(`243's result is correct`, () =>
      expect(getASCIIItemForDecimal(243, ASCIIEncoding.CP437)).toEqual({ dec: 243, hex: 'F3', html: '', char: '≤' }));

    it(`244's result is correct`, () =>
      expect(getASCIIItemForDecimal(244, ASCIIEncoding.CP437)).toEqual({ dec: 244, hex: 'F4', html: '', char: '⌠' }));

    it(`245's result is correct`, () =>
      expect(getASCIIItemForDecimal(245, ASCIIEncoding.CP437)).toEqual({ dec: 245, hex: 'F5', html: '', char: '⌡' }));

    it(`246's result is correct`, () =>
      expect(getASCIIItemForDecimal(246, ASCIIEncoding.CP437)).toEqual({ dec: 246, hex: 'F6', html: '', char: '÷' }));

    it(`247's result is correct`, () =>
      expect(getASCIIItemForDecimal(247, ASCIIEncoding.CP437)).toEqual({ dec: 247, hex: 'F7', html: '', char: '≈' }));

    it(`248's result is correct`, () =>
      expect(getASCIIItemForDecimal(248, ASCIIEncoding.CP437)).toEqual({ dec: 248, hex: 'F8', html: '', char: '°' }));

    it(`249's result is correct`, () =>
      expect(getASCIIItemForDecimal(249, ASCIIEncoding.CP437)).toEqual({ dec: 249, hex: 'F9', html: '', char: '∙' }));

    it(`250's result is correct`, () =>
      expect(getASCIIItemForDecimal(250, ASCIIEncoding.CP437)).toEqual({ dec: 250, hex: 'FA', html: '', char: '·' }));

    it(`251's result is correct`, () =>
      expect(getASCIIItemForDecimal(251, ASCIIEncoding.CP437)).toEqual({ dec: 251, hex: 'FB', html: '', char: '√' }));

    it(`252's result is correct`, () =>
      expect(getASCIIItemForDecimal(252, ASCIIEncoding.CP437)).toEqual({ dec: 252, hex: 'FC', html: '', char: 'ⁿ' }));

    it(`253's result is correct`, () =>
      expect(getASCIIItemForDecimal(253, ASCIIEncoding.CP437)).toEqual({ dec: 253, hex: 'FD', html: '', char: '²' }));

    it(`254's result is correct`, () =>
      expect(getASCIIItemForDecimal(254, ASCIIEncoding.CP437)).toEqual({ dec: 254, hex: 'FE', html: '', char: '■' }));

    // CP437 255 char doesn't seem to be one we can save
    // it(`255's result is correct`, () =>
    //   expect(getASCIIItemForDecimal(255, ASCIIEncoding.CP437)).toEqual({ dec: 255, hex: 'FF', html: '', char: ' ' }));
  });

  describe('UTF-8 Extended Codes', () => {
    it(`128's result is correct`, () =>
      // This should be  and has been seen working in the browser but not when using karma strangely

      expect(getASCIIItemForDecimal(128, ASCIIEncoding.UTF8)).toEqual({
        dec: 128,
        hex: '80',
        html: '',
        char: String.fromCharCode(128),
      }));

    it(`129's result is correct`, () =>
      expect(getASCIIItemForDecimal(129, ASCIIEncoding.UTF8)).toEqual({ dec: 129, hex: '81', html: '', char: '' }));

    it(`130's result is correct`, () =>
      expect(getASCIIItemForDecimal(130, ASCIIEncoding.UTF8)).toEqual({ dec: 130, hex: '82', html: '', char: '' }));

    it(`131's result is correct`, () =>
      expect(getASCIIItemForDecimal(131, ASCIIEncoding.UTF8)).toEqual({ dec: 131, hex: '83', html: '', char: '' }));

    it(`132's result is correct`, () =>
      expect(getASCIIItemForDecimal(132, ASCIIEncoding.UTF8)).toEqual({ dec: 132, hex: '84', html: '', char: '' }));

    it(`133's result is correct`, () =>
      expect(getASCIIItemForDecimal(133, ASCIIEncoding.UTF8)).toEqual({ dec: 133, hex: '85', html: '', char: '' }));

    it(`134's result is correct`, () =>
      expect(getASCIIItemForDecimal(134, ASCIIEncoding.UTF8)).toEqual({ dec: 134, hex: '86', html: '', char: '' }));

    it(`135's result is correct`, () =>
      expect(getASCIIItemForDecimal(135, ASCIIEncoding.UTF8)).toEqual({ dec: 135, hex: '87', html: '', char: '' }));

    it(`136's result is correct`, () =>
      expect(getASCIIItemForDecimal(136, ASCIIEncoding.UTF8)).toEqual({ dec: 136, hex: '88', html: '', char: '' }));

    it(`137's result is correct`, () =>
      expect(getASCIIItemForDecimal(137, ASCIIEncoding.UTF8)).toEqual({ dec: 137, hex: '89', html: '', char: '' }));

    it(`138's result is correct`, () =>
      expect(getASCIIItemForDecimal(138, ASCIIEncoding.UTF8)).toEqual({ dec: 138, hex: '8A', html: '', char: '' }));

    it(`139's result is correct`, () =>
      expect(getASCIIItemForDecimal(139, ASCIIEncoding.UTF8)).toEqual({ dec: 139, hex: '8B', html: '', char: '' }));

    it(`140's result is correct`, () =>
      expect(getASCIIItemForDecimal(140, ASCIIEncoding.UTF8)).toEqual({ dec: 140, hex: '8C', html: '', char: '' }));

    it(`141's result is correct`, () =>
      expect(getASCIIItemForDecimal(141, ASCIIEncoding.UTF8)).toEqual({ dec: 141, hex: '8D', html: '', char: '' }));

    it(`142's result is correct`, () =>
      expect(getASCIIItemForDecimal(142, ASCIIEncoding.UTF8)).toEqual({ dec: 142, hex: '8E', html: '', char: '' }));

    it(`143's result is correct`, () =>
      expect(getASCIIItemForDecimal(143, ASCIIEncoding.UTF8)).toEqual({ dec: 143, hex: '8F', html: '', char: '' }));

    it(`144's result is correct`, () =>
      expect(getASCIIItemForDecimal(144, ASCIIEncoding.UTF8)).toEqual({ dec: 144, hex: '90', html: '', char: '' }));

    it(`146's result is correct`, () =>
      expect(getASCIIItemForDecimal(146, ASCIIEncoding.UTF8)).toEqual({ dec: 146, hex: '92', html: '', char: '' }));

    it(`147's result is correct`, () =>
      expect(getASCIIItemForDecimal(147, ASCIIEncoding.UTF8)).toEqual({ dec: 147, hex: '93', html: '', char: '' }));

    it(`148's result is correct`, () =>
      expect(getASCIIItemForDecimal(148, ASCIIEncoding.UTF8)).toEqual({ dec: 148, hex: '94', html: '', char: '' }));

    it(`149's result is correct`, () =>
      expect(getASCIIItemForDecimal(149, ASCIIEncoding.UTF8)).toEqual({ dec: 149, hex: '95', html: '', char: '' }));

    it(`150's result is correct`, () =>
      expect(getASCIIItemForDecimal(150, ASCIIEncoding.UTF8)).toEqual({ dec: 150, hex: '96', html: '', char: '' }));

    it(`151's result is correct`, () =>
      expect(getASCIIItemForDecimal(151, ASCIIEncoding.UTF8)).toEqual({ dec: 151, hex: '97', html: '', char: '' }));

    it(`152's result is correct`, () =>
      expect(getASCIIItemForDecimal(152, ASCIIEncoding.UTF8)).toEqual({ dec: 152, hex: '98', html: '', char: '' }));

    it(`153's result is correct`, () =>
      expect(getASCIIItemForDecimal(153, ASCIIEncoding.UTF8)).toEqual({ dec: 153, hex: '99', html: '', char: '' }));

    it(`154's result is correct`, () =>
      expect(getASCIIItemForDecimal(154, ASCIIEncoding.UTF8)).toEqual({ dec: 154, hex: '9A', html: '', char: '' }));

    it(`155's result is correct`, () =>
      expect(getASCIIItemForDecimal(155, ASCIIEncoding.UTF8)).toEqual({ dec: 155, hex: '9B', html: '', char: '' }));

    it(`156's result is correct`, () =>
      expect(getASCIIItemForDecimal(156, ASCIIEncoding.UTF8)).toEqual({ dec: 156, hex: '9C', html: '', char: '' }));

    it(`157's result is correct`, () =>
      expect(getASCIIItemForDecimal(157, ASCIIEncoding.UTF8)).toEqual({ dec: 157, hex: '9D', html: '', char: '' }));

    it(`158's result is correct`, () =>
      expect(getASCIIItemForDecimal(158, ASCIIEncoding.UTF8)).toEqual({ dec: 158, hex: '9E', html: '', char: '' }));

    it(`159's result is correct`, () =>
      expect(getASCIIItemForDecimal(159, ASCIIEncoding.UTF8)).toEqual({ dec: 159, hex: '9F', html: '', char: '' }));

    it(`160's result is correct`, () =>
      expect(getASCIIItemForDecimal(160, ASCIIEncoding.UTF8)).toEqual({ dec: 160, hex: 'A0', html: '&#160;', char: ' ' }));

    it(`161's result is correct`, () =>
      expect(getASCIIItemForDecimal(161, ASCIIEncoding.UTF8)).toEqual({ dec: 161, hex: 'A1', html: '&#161;', char: '¡' }));

    it(`162's result is correct`, () =>
      expect(getASCIIItemForDecimal(162, ASCIIEncoding.UTF8)).toEqual({ dec: 162, hex: 'A2', html: '&#162;', char: '¢' }));

    it(`163's result is correct`, () =>
      expect(getASCIIItemForDecimal(163, ASCIIEncoding.UTF8)).toEqual({ dec: 163, hex: 'A3', html: '&#163;', char: '£' }));

    it(`164's result is correct`, () =>
      expect(getASCIIItemForDecimal(164, ASCIIEncoding.UTF8)).toEqual({ dec: 164, hex: 'A4', html: '&#164;', char: '¤' }));

    it(`165's result is correct`, () =>
      expect(getASCIIItemForDecimal(165, ASCIIEncoding.UTF8)).toEqual({ dec: 165, hex: 'A5', html: '&#165;', char: '¥' }));

    it(`166's result is correct`, () =>
      expect(getASCIIItemForDecimal(166, ASCIIEncoding.UTF8)).toEqual({ dec: 166, hex: 'A6', html: '&#166;', char: '¦' }));

    it(`167's result is correct`, () =>
      expect(getASCIIItemForDecimal(167, ASCIIEncoding.UTF8)).toEqual({ dec: 167, hex: 'A7', html: '&#167;', char: '§' }));

    it(`168's result is correct`, () =>
      expect(getASCIIItemForDecimal(168, ASCIIEncoding.UTF8)).toEqual({ dec: 168, hex: 'A8', html: '&#168;', char: '¨' }));

    it(`169's result is correct`, () =>
      expect(getASCIIItemForDecimal(169, ASCIIEncoding.UTF8)).toEqual({ dec: 169, hex: 'A9', html: '&#169;', char: '©' }));

    it(`170's result is correct`, () =>
      expect(getASCIIItemForDecimal(170, ASCIIEncoding.UTF8)).toEqual({ dec: 170, hex: 'AA', html: '&#170;', char: 'ª' }));

    it(`171's result is correct`, () =>
      expect(getASCIIItemForDecimal(171, ASCIIEncoding.UTF8)).toEqual({ dec: 171, hex: 'AB', html: '&#171;', char: '«' }));

    it(`172's result is correct`, () =>
      expect(getASCIIItemForDecimal(172, ASCIIEncoding.UTF8)).toEqual({ dec: 172, hex: 'AC', html: '&#172;', char: '¬' }));

    it(`173's result is correct`, () =>
      expect(getASCIIItemForDecimal(173, ASCIIEncoding.UTF8)).toEqual({ dec: 173, hex: 'AD', html: '&#173;', char: '­' }));

    it(`174's result is correct`, () =>
      expect(getASCIIItemForDecimal(174, ASCIIEncoding.UTF8)).toEqual({ dec: 174, hex: 'AE', html: '&#174;', char: '®' }));

    it(`175's result is correct`, () =>
      expect(getASCIIItemForDecimal(175, ASCIIEncoding.UTF8)).toEqual({ dec: 175, hex: 'AF', html: '&#175;', char: '¯' }));

    it(`176's result is correct`, () =>
      expect(getASCIIItemForDecimal(176, ASCIIEncoding.UTF8)).toEqual({ dec: 176, hex: 'B0', html: '&#176;', char: '°' }));

    it(`177's result is correct`, () =>
      expect(getASCIIItemForDecimal(177, ASCIIEncoding.UTF8)).toEqual({ dec: 177, hex: 'B1', html: '&#177;', char: '±' }));

    it(`178's result is correct`, () =>
      expect(getASCIIItemForDecimal(178, ASCIIEncoding.UTF8)).toEqual({ dec: 178, hex: 'B2', html: '&#178;', char: '²' }));

    it(`179's result is correct`, () =>
      expect(getASCIIItemForDecimal(179, ASCIIEncoding.UTF8)).toEqual({ dec: 179, hex: 'B3', html: '&#179;', char: '³' }));

    it(`180's result is correct`, () =>
      expect(getASCIIItemForDecimal(180, ASCIIEncoding.UTF8)).toEqual({ dec: 180, hex: 'B4', html: '&#180;', char: '´' }));

    it(`181's result is correct`, () =>
      expect(getASCIIItemForDecimal(181, ASCIIEncoding.UTF8)).toEqual({ dec: 181, hex: 'B5', html: '&#181;', char: 'µ' }));

    it(`182's result is correct`, () =>
      expect(getASCIIItemForDecimal(182, ASCIIEncoding.UTF8)).toEqual({ dec: 182, hex: 'B6', html: '&#182;', char: '¶' }));

    it(`183's result is correct`, () =>
      expect(getASCIIItemForDecimal(183, ASCIIEncoding.UTF8)).toEqual({ dec: 183, hex: 'B7', html: '&#183;', char: '·' }));

    it(`184's result is correct`, () =>
      expect(getASCIIItemForDecimal(184, ASCIIEncoding.UTF8)).toEqual({ dec: 184, hex: 'B8', html: '&#184;', char: '¸' }));

    it(`185's result is correct`, () =>
      expect(getASCIIItemForDecimal(185, ASCIIEncoding.UTF8)).toEqual({ dec: 185, hex: 'B9', html: '&#185;', char: '¹' }));

    it(`186's result is correct`, () =>
      expect(getASCIIItemForDecimal(186, ASCIIEncoding.UTF8)).toEqual({ dec: 186, hex: 'BA', html: '&#186;', char: 'º' }));

    it(`187's result is correct`, () =>
      expect(getASCIIItemForDecimal(187, ASCIIEncoding.UTF8)).toEqual({ dec: 187, hex: 'BB', html: '&#187;', char: '»' }));

    it(`188's result is correct`, () =>
      expect(getASCIIItemForDecimal(188, ASCIIEncoding.UTF8)).toEqual({ dec: 188, hex: 'BC', html: '&#188;', char: '¼' }));

    it(`189's result is correct`, () =>
      expect(getASCIIItemForDecimal(189, ASCIIEncoding.UTF8)).toEqual({ dec: 189, hex: 'BD', html: '&#189;', char: '½' }));

    it(`190's result is correct`, () =>
      expect(getASCIIItemForDecimal(190, ASCIIEncoding.UTF8)).toEqual({ dec: 190, hex: 'BE', html: '&#190;', char: '¾' }));

    it(`191's result is correct`, () =>
      expect(getASCIIItemForDecimal(191, ASCIIEncoding.UTF8)).toEqual({ dec: 191, hex: 'BF', html: '&#191;', char: '¿' }));

    it(`192's result is correct`, () =>
      expect(getASCIIItemForDecimal(192, ASCIIEncoding.UTF8)).toEqual({ dec: 192, hex: 'C0', html: '&#192;', char: 'À' }));

    it(`193's result is correct`, () =>
      expect(getASCIIItemForDecimal(193, ASCIIEncoding.UTF8)).toEqual({ dec: 193, hex: 'C1', html: '&#193;', char: 'Á' }));

    it(`194's result is correct`, () =>
      expect(getASCIIItemForDecimal(194, ASCIIEncoding.UTF8)).toEqual({ dec: 194, hex: 'C2', html: '&#194;', char: 'Â' }));

    it(`195's result is correct`, () =>
      expect(getASCIIItemForDecimal(195, ASCIIEncoding.UTF8)).toEqual({ dec: 195, hex: 'C3', html: '&#195;', char: 'Ã' }));

    it(`196's result is correct`, () =>
      expect(getASCIIItemForDecimal(196, ASCIIEncoding.UTF8)).toEqual({ dec: 196, hex: 'C4', html: '&#196;', char: 'Ä' }));

    it(`197's result is correct`, () =>
      expect(getASCIIItemForDecimal(197, ASCIIEncoding.UTF8)).toEqual({ dec: 197, hex: 'C5', html: '&#197;', char: 'Å' }));

    it(`198's result is correct`, () =>
      expect(getASCIIItemForDecimal(198, ASCIIEncoding.UTF8)).toEqual({ dec: 198, hex: 'C6', html: '&#198;', char: 'Æ' }));

    it(`199's result is correct`, () =>
      expect(getASCIIItemForDecimal(199, ASCIIEncoding.UTF8)).toEqual({ dec: 199, hex: 'C7', html: '&#199;', char: 'Ç' }));

    it(`200's result is correct`, () =>
      expect(getASCIIItemForDecimal(200, ASCIIEncoding.UTF8)).toEqual({ dec: 200, hex: 'C8', html: '&#200;', char: 'È' }));

    it(`201's result is correct`, () =>
      expect(getASCIIItemForDecimal(201, ASCIIEncoding.UTF8)).toEqual({ dec: 201, hex: 'C9', html: '&#201;', char: 'É' }));

    it(`202's result is correct`, () =>
      expect(getASCIIItemForDecimal(202, ASCIIEncoding.UTF8)).toEqual({ dec: 202, hex: 'CA', html: '&#202;', char: 'Ê' }));

    it(`203's result is correct`, () =>
      expect(getASCIIItemForDecimal(203, ASCIIEncoding.UTF8)).toEqual({ dec: 203, hex: 'CB', html: '&#203;', char: 'Ë' }));

    it(`204's result is correct`, () =>
      expect(getASCIIItemForDecimal(204, ASCIIEncoding.UTF8)).toEqual({ dec: 204, hex: 'CC', html: '&#204;', char: 'Ì' }));

    it(`205's result is correct`, () =>
      expect(getASCIIItemForDecimal(205, ASCIIEncoding.UTF8)).toEqual({ dec: 205, hex: 'CD', html: '&#205;', char: 'Í' }));

    it(`206's result is correct`, () =>
      expect(getASCIIItemForDecimal(206, ASCIIEncoding.UTF8)).toEqual({ dec: 206, hex: 'CE', html: '&#206;', char: 'Î' }));

    it(`207's result is correct`, () =>
      expect(getASCIIItemForDecimal(207, ASCIIEncoding.UTF8)).toEqual({ dec: 207, hex: 'CF', html: '&#207;', char: 'Ï' }));

    it(`208's result is correct`, () =>
      expect(getASCIIItemForDecimal(208, ASCIIEncoding.UTF8)).toEqual({ dec: 208, hex: 'D0', html: '&#208;', char: 'Ð' }));

    it(`209's result is correct`, () =>
      expect(getASCIIItemForDecimal(209, ASCIIEncoding.UTF8)).toEqual({ dec: 209, hex: 'D1', html: '&#209;', char: 'Ñ' }));

    it(`210's result is correct`, () =>
      expect(getASCIIItemForDecimal(210, ASCIIEncoding.UTF8)).toEqual({ dec: 210, hex: 'D2', html: '&#210;', char: 'Ò' }));

    it(`211's result is correct`, () =>
      expect(getASCIIItemForDecimal(211, ASCIIEncoding.UTF8)).toEqual({ dec: 211, hex: 'D3', html: '&#211;', char: 'Ó' }));

    it(`212's result is correct`, () =>
      expect(getASCIIItemForDecimal(212, ASCIIEncoding.UTF8)).toEqual({ dec: 212, hex: 'D4', html: '&#212;', char: 'Ô' }));

    it(`213's result is correct`, () =>
      expect(getASCIIItemForDecimal(213, ASCIIEncoding.UTF8)).toEqual({ dec: 213, hex: 'D5', html: '&#213;', char: 'Õ' }));

    it(`214's result is correct`, () =>
      expect(getASCIIItemForDecimal(214, ASCIIEncoding.UTF8)).toEqual({ dec: 214, hex: 'D6', html: '&#214;', char: 'Ö' }));

    it(`215's result is correct`, () =>
      expect(getASCIIItemForDecimal(215, ASCIIEncoding.UTF8)).toEqual({ dec: 215, hex: 'D7', html: '&#215;', char: '×' }));

    it(`216's result is correct`, () =>
      expect(getASCIIItemForDecimal(216, ASCIIEncoding.UTF8)).toEqual({ dec: 216, hex: 'D8', html: '&#216;', char: 'Ø' }));

    it(`217's result is correct`, () =>
      expect(getASCIIItemForDecimal(217, ASCIIEncoding.UTF8)).toEqual({ dec: 217, hex: 'D9', html: '&#217;', char: 'Ù' }));

    it(`218's result is correct`, () =>
      expect(getASCIIItemForDecimal(218, ASCIIEncoding.UTF8)).toEqual({ dec: 218, hex: 'DA', html: '&#218;', char: 'Ú' }));

    it(`219's result is correct`, () =>
      expect(getASCIIItemForDecimal(219, ASCIIEncoding.UTF8)).toEqual({ dec: 219, hex: 'DB', html: '&#219;', char: 'Û' }));

    it(`220's result is correct`, () =>
      expect(getASCIIItemForDecimal(220, ASCIIEncoding.UTF8)).toEqual({ dec: 220, hex: 'DC', html: '&#220;', char: 'Ü' }));

    it(`221's result is correct`, () =>
      expect(getASCIIItemForDecimal(221, ASCIIEncoding.UTF8)).toEqual({ dec: 221, hex: 'DD', html: '&#221;', char: 'Ý' }));

    it(`222's result is correct`, () =>
      expect(getASCIIItemForDecimal(222, ASCIIEncoding.UTF8)).toEqual({ dec: 222, hex: 'DE', html: '&#222;', char: 'Þ' }));

    it(`223's result is correct`, () =>
      expect(getASCIIItemForDecimal(223, ASCIIEncoding.UTF8)).toEqual({ dec: 223, hex: 'DF', html: '&#223;', char: 'ß' }));

    it(`224's result is correct`, () =>
      expect(getASCIIItemForDecimal(224, ASCIIEncoding.UTF8)).toEqual({ dec: 224, hex: 'E0', html: '&#224;', char: 'à' }));

    it(`225's result is correct`, () =>
      expect(getASCIIItemForDecimal(225, ASCIIEncoding.UTF8)).toEqual({ dec: 225, hex: 'E1', html: '&#225;', char: 'á' }));

    it(`226's result is correct`, () =>
      expect(getASCIIItemForDecimal(226, ASCIIEncoding.UTF8)).toEqual({ dec: 226, hex: 'E2', html: '&#226;', char: 'â' }));

    it(`227's result is correct`, () =>
      expect(getASCIIItemForDecimal(227, ASCIIEncoding.UTF8)).toEqual({ dec: 227, hex: 'E3', html: '&#227;', char: 'ã' }));

    it(`228's result is correct`, () =>
      expect(getASCIIItemForDecimal(228, ASCIIEncoding.UTF8)).toEqual({ dec: 228, hex: 'E4', html: '&#228;', char: 'ä' }));

    it(`229's result is correct`, () =>
      expect(getASCIIItemForDecimal(229, ASCIIEncoding.UTF8)).toEqual({ dec: 229, hex: 'E5', html: '&#229;', char: 'å' }));

    it(`230's result is correct`, () =>
      expect(getASCIIItemForDecimal(230, ASCIIEncoding.UTF8)).toEqual({ dec: 230, hex: 'E6', html: '&#230;', char: 'æ' }));

    it(`231's result is correct`, () =>
      expect(getASCIIItemForDecimal(231, ASCIIEncoding.UTF8)).toEqual({ dec: 231, hex: 'E7', html: '&#231;', char: 'ç' }));

    it(`232's result is correct`, () =>
      expect(getASCIIItemForDecimal(232, ASCIIEncoding.UTF8)).toEqual({ dec: 232, hex: 'E8', html: '&#232;', char: 'è' }));

    it(`233's result is correct`, () =>
      expect(getASCIIItemForDecimal(233, ASCIIEncoding.UTF8)).toEqual({ dec: 233, hex: 'E9', html: '&#233;', char: 'é' }));

    it(`234's result is correct`, () =>
      expect(getASCIIItemForDecimal(234, ASCIIEncoding.UTF8)).toEqual({ dec: 234, hex: 'EA', html: '&#234;', char: 'ê' }));

    it(`235's result is correct`, () =>
      expect(getASCIIItemForDecimal(235, ASCIIEncoding.UTF8)).toEqual({ dec: 235, hex: 'EB', html: '&#235;', char: 'ë' }));

    it(`236's result is correct`, () =>
      expect(getASCIIItemForDecimal(236, ASCIIEncoding.UTF8)).toEqual({ dec: 236, hex: 'EC', html: '&#236;', char: 'ì' }));

    it(`237's result is correct`, () =>
      expect(getASCIIItemForDecimal(237, ASCIIEncoding.UTF8)).toEqual({ dec: 237, hex: 'ED', html: '&#237;', char: 'í' }));

    it(`238's result is correct`, () =>
      expect(getASCIIItemForDecimal(238, ASCIIEncoding.UTF8)).toEqual({ dec: 238, hex: 'EE', html: '&#238;', char: 'î' }));

    it(`239's result is correct`, () =>
      expect(getASCIIItemForDecimal(239, ASCIIEncoding.UTF8)).toEqual({ dec: 239, hex: 'EF', html: '&#239;', char: 'ï' }));

    it(`240's result is correct`, () =>
      expect(getASCIIItemForDecimal(240, ASCIIEncoding.UTF8)).toEqual({ dec: 240, hex: 'F0', html: '&#240;', char: 'ð' }));

    it(`241's result is correct`, () =>
      expect(getASCIIItemForDecimal(241, ASCIIEncoding.UTF8)).toEqual({ dec: 241, hex: 'F1', html: '&#241;', char: 'ñ' }));

    it(`242's result is correct`, () =>
      expect(getASCIIItemForDecimal(242, ASCIIEncoding.UTF8)).toEqual({ dec: 242, hex: 'F2', html: '&#242;', char: 'ò' }));

    it(`243's result is correct`, () =>
      expect(getASCIIItemForDecimal(243, ASCIIEncoding.UTF8)).toEqual({ dec: 243, hex: 'F3', html: '&#243;', char: 'ó' }));

    it(`244's result is correct`, () =>
      expect(getASCIIItemForDecimal(244, ASCIIEncoding.UTF8)).toEqual({ dec: 244, hex: 'F4', html: '&#244;', char: 'ô' }));

    it(`245's result is correct`, () =>
      expect(getASCIIItemForDecimal(245, ASCIIEncoding.UTF8)).toEqual({ dec: 245, hex: 'F5', html: '&#245;', char: 'õ' }));

    it(`246's result is correct`, () =>
      expect(getASCIIItemForDecimal(246, ASCIIEncoding.UTF8)).toEqual({ dec: 246, hex: 'F6', html: '&#246;', char: 'ö' }));

    it(`247's result is correct`, () =>
      expect(getASCIIItemForDecimal(247, ASCIIEncoding.UTF8)).toEqual({ dec: 247, hex: 'F7', html: '&#247;', char: '÷' }));

    it(`248's result is correct`, () =>
      expect(getASCIIItemForDecimal(248, ASCIIEncoding.UTF8)).toEqual({ dec: 248, hex: 'F8', html: '&#248;', char: 'ø' }));

    it(`249's result is correct`, () =>
      expect(getASCIIItemForDecimal(249, ASCIIEncoding.UTF8)).toEqual({ dec: 249, hex: 'F9', html: '&#249;', char: 'ù' }));

    it(`250's result is correct`, () =>
      expect(getASCIIItemForDecimal(250, ASCIIEncoding.UTF8)).toEqual({ dec: 250, hex: 'FA', html: '&#250;', char: 'ú' }));

    it(`251's result is correct`, () =>
      expect(getASCIIItemForDecimal(251, ASCIIEncoding.UTF8)).toEqual({ dec: 251, hex: 'FB', html: '&#251;', char: 'û' }));

    it(`252's result is correct`, () =>
      expect(getASCIIItemForDecimal(252, ASCIIEncoding.UTF8)).toEqual({ dec: 252, hex: 'FC', html: '&#252;', char: 'ü' }));

    it(`253's result is correct`, () =>
      expect(getASCIIItemForDecimal(253, ASCIIEncoding.UTF8)).toEqual({ dec: 253, hex: 'FD', html: '&#253;', char: 'ý' }));

    it(`254's result is correct`, () =>
      expect(getASCIIItemForDecimal(254, ASCIIEncoding.UTF8)).toEqual({ dec: 254, hex: 'FE', html: '&#254;', char: 'þ' }));

    it(`255's result is correct`, () =>
      expect(getASCIIItemForDecimal(255, ASCIIEncoding.UTF8)).toEqual({ dec: 255, hex: 'FF', html: '&#255;', char: 'ÿ' }));
  });

  describe('ISO Extended Codes', () => {
    it(`128's result is correct`, () =>
      expect(getASCIIItemForDecimal(128, ASCIIEncoding.ISO88591)).toEqual({ dec: 128, hex: '80', html: '', char: '€' }));
  });
});
