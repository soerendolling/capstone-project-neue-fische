export function toggleValueInArray(array, value) {
  if (array.includes(value)) {
    return array.filter((filter) => {
      return filter !== value;
    });
  } else {
    return [...array, value];
  }
}
