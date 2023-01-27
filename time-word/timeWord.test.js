const {timeWord, timeStr, minStr, onesStr, teensStr, convertHour} = require('./timeWord');


describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('midnight', () => {
    const time = timeWord("00:00");
    expect(time).toEqual("midnight");
  });
  test('noon', () => {
    const time = timeWord("12:00");
    expect(time).toEqual("noon");
  });
  test("12:01", () => {
    const time = timeWord("12:01");
    expect(time).toEqual("twelve oh-one pm");
  });
  test('06:00 works', () => {
    const time = timeWord("06:00");
    expect(time).toEqual("six o'clock am")
  });
  test('14:20 works', () => {
    const time = timeWord("14:20");
    expect(time).toEqual("two twenty pm")
  });
  test('15:56 works', () => {
    const time = timeWord("15:56");
    expect(time).toEqual("three fifty-six pm")
  });
});

describe("timeStr", () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('midnight', () => {
    const time = timeStr("00","00");
    expect(time).toEqual("midnight");
  });
  test('noon', () => {
    const time = timeStr("12","00");
    expect(time).toEqual("noon");
  });
  test("12:01", () => {
    const time = timeStr("12","01");
    expect(time).toEqual("twelve oh-one pm");
  });
  test('06:00 works', () => {
    const time = timeStr("06","00");
    expect(time).toEqual("six o'clock am")
  });
  test('14:20 works', () => {
    const time = timeStr("14","20");
    expect(time).toEqual("two twenty pm")
  });
  test('15:56 works', () => {
    const time = timeStr("15","56");
    expect(time).toEqual("three fifty-six pm")
  });
});

describe("minStr", () => {
  test("o'clock", () => {
    const min = minStr("00");
    expect(min).toEqual("o'clock");
  });
  test("oh-one", () => {
    const min = minStr("01");
    expect(min).toEqual("oh-one");
  });
  test("eleven", () => {
    const min = minStr("11");
    expect(min).toEqual("eleven");
  });
  test("twenty", () => {
    const min = minStr("20");
    expect(min).toEqual("twenty");
  });
});

describe("onesStr", () => {
  test("0", () => {
    const num = onesStr("0");
    expect(num).toEqual("");
  });
  test("7", () => {
    const num = onesStr("7");
    expect(num).toEqual("-seven");
  });
});

describe("teensStr", () => {
  test("ten", () => {
    const num = teensStr("0");
    expect(num).toEqual("ten");
  });
  test("thirteen", () => {
    const num = teensStr("3");
    expect(num).toEqual("thirteen");
  })
});

describe("convertHour", () => {
  test("00", () => {
    const hour = convertHour("00");
    expect(hour).toEqual(["twelve", "am"])
  });
  test("12", () => {
    const hour = convertHour("12");
    expect(hour).toEqual(["00", "pm"]);
  });
});