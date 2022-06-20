const romanToDecimal = require("./");

describe("Roman to Numerals solution", () => {
  test("It passes the basics", () => {
    expect(romanToDecimal("I")).toBe(1);
    expect(romanToDecimal("V")).toBe(5);
    expect(romanToDecimal("X")).toBe(10);
    expect(romanToDecimal("L")).toBe(50);
    expect(romanToDecimal("C")).toBe(100);
    expect(romanToDecimal("D")).toBe(500);
    expect(romanToDecimal("M")).toBe(1000);
  });

  test("Single - multiple characters", () => {
    expect(romanToDecimal("II")).toBe(2);
    expect(romanToDecimal("XX")).toBe(20);
    expect(romanToDecimal("CC")).toBe(200);
    expect(romanToDecimal("MM")).toBe(2000);
  });

  test("Deductions with I", () => {
    expect(romanToDecimal("IV")).toBe(4);
    expect(romanToDecimal("IX")).toBe(9);
  });

  test("Additions with I", () => {
    expect(romanToDecimal("III")).toBe(3);
    expect(romanToDecimal("VI")).toBe(6);
    expect(romanToDecimal("VII")).toBe(7);
    expect(romanToDecimal("VIII")).toBe(8);
    expect(romanToDecimal("CI")).toBe(101);
    expect(romanToDecimal("CIII")).toBe(103);
    expect(romanToDecimal("DI")).toBe(501);
    expect(romanToDecimal("DII")).toBe(502);
    expect(romanToDecimal("MI")).toBe(1001);
    expect(romanToDecimal("MIV")).toBe(1004);
  });

  test("Deductions with X", () => {
    expect(romanToDecimal("XL")).toBe(40);
    expect(romanToDecimal("XC")).toBe(90);
  });

  test("Additions with X", () => {
    expect(romanToDecimal("LXX")).toBe(70);
    expect(romanToDecimal("CX")).toBe(110);
    expect(romanToDecimal("DXL")).toBe(540);
    expect(romanToDecimal("MXXX")).toBe(1030);
  });

  test("Numbers below 100", () => {
    expect(romanToDecimal("XXIX")).toBe(29);
    expect(romanToDecimal("XXXIII")).toBe(33);
    expect(romanToDecimal("XLVII")).toBe(47);
    expect(romanToDecimal("LIV")).toBe(54);
    expect(romanToDecimal("LXIX")).toBe(69);
    expect(romanToDecimal("LXX")).toBe(70);
    expect(romanToDecimal("LXXXVI")).toBe(86);
    expect(romanToDecimal("XCIV")).toBe(94);
  });

  test("Numbers below 1000", () => {
    expect(romanToDecimal("CXLIV")).toBe(144);
    expect(romanToDecimal("CLXVIII")).toBe(168);
    expect(romanToDecimal("CXCIV")).toBe(194);
    expect(romanToDecimal("CXCV")).toBe(195);
    expect(romanToDecimal("CCCLV")).toBe(355);
    expect(romanToDecimal("CDLX")).toBe(460);
    expect(romanToDecimal("DLX")).toBe(560);
    expect(romanToDecimal("DCLXIV")).toBe(664);
    expect(romanToDecimal("DCCXCIX")).toBe(799);
    expect(romanToDecimal("DCCCXLVIII")).toBe(848);
    expect(romanToDecimal("CMXCI")).toBe(991);
  });

  test("Large numbers", () => {
    expect(romanToDecimal("MDXC")).toBe(1590);
    expect(romanToDecimal("MMCDXLVIII")).toBe(2448);
    expect(romanToDecimal("MMMDCCXXIV")).toBe(3724);
    expect(romanToDecimal("MMMCMXCIX")).toBe(3999);
  });
});
