export function displayTime(open, close) {
  const numberLengthOpen = open.toString().length > 2 ? 2 : 0;
  const numberLengthClose = close.toString().length > 2 ? 2 : 0;
  const changeFormatOpen = `${(open % 12).toFixed(numberLengthOpen)}`;
  const changeFormatClose = `${(close % 12).toFixed(numberLengthClose)}`;
  const amPmOpen = open < 12 ? "am" : "pm";
  const amPmClose = close < 12 ? "am" : "pm";
  return open > 0
    ? `${changeFormatOpen}${amPmOpen} until ${changeFormatClose}${amPmClose}`
    : "Closed Today";
}
