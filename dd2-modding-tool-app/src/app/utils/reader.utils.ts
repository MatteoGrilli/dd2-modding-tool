export function readObject<T>(fileItem: string): T {
  const res: any = {};
  const lines = fileItem.split('\r\n').filter((line) => line !== '');

  const firstLineTokens = lines.shift()?.split(',');
  if (!firstLineTokens) {
    throw new Error('Invalid file format!');
  }
  res.id = firstLineTokens[1];

  lines.forEach(line => {
    const tokens = line.split(',').filter(token => token !== '');
    const fieldName = tokens.shift() ?? '';
    if (tokens.length > 1) {
      res[fieldName] = tokens.map(token => parseValue(token));
    } else {
      res[fieldName] = parseValue(tokens[0]);
    }
  });

  return res as T;
}

// Magically deduces type because javascript lets me do it
function parseValue(text: string) {
  switch(true) {
    case (!isNaN(Number(text))): return Number(text);
    case (text === 'True' || text === 'False'): return text === 'True';
    default: return text;
  }
}
