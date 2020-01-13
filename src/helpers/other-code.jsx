export const otherCodeHelper = (rawString) => {
  const elements = rawString.split('\n').filter(row => row !== '');
  return elements;
}
