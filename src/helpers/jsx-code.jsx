const replacePunctuation = (match, p1) => {
  return `<span class="code-punctuation">${p1}</span>`;
}

export const jsxCodeHelper = (rawString) => {
  const rawElements = rawString.split('\n').filter(row => row !== '');

  const elements = rawElements.map(element => {
    return element.replace(/([{}<>=():])/g, replacePunctuation);
  });
  return elements;
}
