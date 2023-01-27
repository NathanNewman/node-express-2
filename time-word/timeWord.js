/** Time Word
 * 
 * The timeWord function converts digital time into word time. Digital time must be in form of a 
 * two digit hour and two digit minute, separated by a colon. The time must also be in the form of 
 * a string.
 * 
 * timeWord("hr:mn"); example: timeWord("12:30");
 * 
 * It splits the string using .split into hours and minutes and then converts them to words using
 * the timeStr function.
 */

function timeWord(time) {
  const [hour, min] = time.split(":");
  return timeStr(hour, min);
}

/** timeStr
 * 
 * This function takes two arguments, hour and min, that both need to be in the form of a two digit
 * string.
 * 
 * timeStr("hr", "mn"); example: timeStr("12","30");
 * 
 * It returns a string. The string is the word form of hours, minutes, and meridiem, unless the
 * arguments are ("00","00") or ("12", "00") in which it then returns "midnight" or "noon" respectively.
 */

function timeStr(hour, min) {
  if (hour === "00" && min === "00") return "midnight";
  if (hour === "12" && min === "00") return "noon";
  const [adjHour, meridiem ] = convertHour(hour);
  if (adjHour === "01") return "one" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "02") return "two" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "03") return "three" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "04") return "four" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "05") return "five" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "06") return "six" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "07") return "seven" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "08") return "eight" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "09") return "nine" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "10") return "ten" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "11") return "eleven" + " " + minStr(min) + " " + meridiem;
  if (adjHour === "00") return "twelve" + " " + minStr(min) + " " + meridiem;
}

/** minStr
 * 
 * Takes one argument, minutes, that must be the form of a two digit string.
 * 
 * minStr("mn"); example: minStr("00");
 * 
 * Returns a string of time in minutes, unless time is "00" in which it returns "o'clock".
 */

function minStr(min) {
  if (min === "00") return "o'clock";
  const [tens, ones] = min.split("");
  if (tens === "0") return "oh" + onesStr(ones);
  if (tens === "1") return teensStr(tens, ones);
  if (tens === "2") return "twenty" + onesStr(ones);
  if (tens === "3") return "thirty" + onesStr(ones);
  if (tens === "4") return "fourty" + onesStr(ones);
  if (tens === "5") return "fifty" + onesStr(ones);
  if (tens === "6") return "sixty" + onesStr(ones);
}

/** onesStr
 * 
 * Takes a single argument in the form of a one digit string.
 * 
 * onesStr("n"); example: onesStr("1");
 * 
 * returns a string that is a dash followed by the word form of the number unless the agrument
 * is "0", in which case it returns an empty string.
 */

function onesStr(ones) {
  if (ones === "0") return "";
  if (ones === "1") return "-one";
  if (ones === "2") return "-two";
  if (ones === "3") return "-three";
  if (ones === "4") return "-four";
  if (ones === "5") return "-five";
  if (ones === "6") return "-six";
  if (ones === "7") return "-seven";
  if (ones === "8") return "-eight";
  if (ones === "9") return "-nine";
}

/** teensStr
 * 
 * Takes one argument which is a single digit string. Returns the corresponding number in
 * word form, assuming "1" is in the tens column. For example, for arugment "0" it assumes
 * "10" and returns "ten". For argument "3" it assumes "13" and returns "thirteen".
 */

function teensStr(ones) {
  if (ones === "0") return "ten";
  if (ones === "1") return "eleven";
  if (ones === "2") return "twelve";
  if (ones === "3") return "thirteen";
  if (ones === "4") return "fourteen";
  if (ones === "5") return "fifteen";
  if (ones === "6") return "sixteen";
  if (ones === "7") return "seventeen";
  if (ones === "8") return "eighteen";
  if (ones === "9") return "nineteen";
}

/** convertHour
 * 
 * Takes one argument which is a two digit string.
 * 
 * convertHour("hr"); example: convertHour("12");
 * 
 * If the hour is "00", returns an array containing "twelve" and "am"
 * If the number is less than 12, returns an array which contains the hour and the meridiem "am".
 * If the number is 12 or greater, it subtracts 12 from the number and returns an array containing
 * the number as a string and the meridiem "pm". 
 */

function convertHour(hour) {
  if (hour === "00") return ["twelve", "am"];
  if (parseInt(hour) < 12) return [hour, "am"];
  const adjHour = parseInt(hour) - 12;
  if (adjHour < 10) return ["0" + adjHour.toString(), "pm"];
  return [adjHour.toString(), "pm"];
}

module.exports = {timeWord, timeStr, minStr, onesStr, teensStr, convertHour};
