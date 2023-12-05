export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) return '';
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}
