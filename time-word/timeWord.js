function timeWord(time) {
  const [hour, min] = time.split(":");
  return timeStr(hour, min);
}

function timeStr(hour, min) {
  if (hour === "00" && min === "00") return "midnight";
  const [adjHour, meridiem] = meridiem(hour);
  if (adjHour === "01") return "one" + minStr(min) + meridiem;
  if (adjHour === "02") return "two" + minStr(min) + meridiem;
  if (adjHour === "03") return "three" + minStr(min) + meridiem;
  if (adjHour === "04") return "four" + minStr(min) + meridiem;
  if (adjHour === "05") return "five" + minStr(min) + meridiem;
  if (adjHour === "06") return "six" + minStr(min) + meridiem;
  if (adjHour === "07") return "seven" + minStr(min) + meridiem;
  if (adjHour === "08") return "eight" + minStr(min) + meridiem;
  if (adjHour === "09") return "nine" + minStr(min) + meridiem;
  if (adjHour === "10") return "ten" + minStr(min) + meridiem;
  if (adjHour === "11") return "eleven" + minStr(min) + meridiem;
  if (adjHour === "12") return "twelve" + minStr(min) + meridiem;
}

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

function onesStr(ones) {
  if (ones === 0) return "";
  if (ones === 1) return "one";
  if (ones === 2) return "two";
  if (ones === 3) return "three";
  if (ones === 4) return "four";
  if (ones === 5) return "five";
  if (ones === 6) return "six";
  if (ones === 7) return "seven";
  if (ones === 8) return "eight";
  if (ones === 9) return "nine";
}

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

function meridiem(hour) {
  if (hour === "00") return ["twelve", "am"];
  if (parseInt(hour) < 12) return [hour, "am"];

  const adjHour = parseInt(hour) - 12;
  return [adjHour.toString(), "pm"];
}
