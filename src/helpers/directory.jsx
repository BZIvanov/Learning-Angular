const replacer = (match, p1, p2, p3, p4) => {
  const htmlSymbol = p1 === 'folder' ? '&#9826;' : '&#9883;';
  const active = p4 === '@active' ? 'active' : '';
  return `<div class="${p1} ${active}" key="${p3}">${'&#10171;'.repeat(+p2)}${htmlSymbol}${p3}</div>`;
}

export const directoryHelper = (rawString) => {
  const rawElements = rawString.split('\n').map(row => row.trim()).filter(row => row !== '');
  
  const elements = rawElements.map(element => {
    return element.replace(/(folder|file)\|(\d)\|([a-zA-Z0-9.\-_]+)(@active)?/, replacer);
  });
  
  return elements;
}
