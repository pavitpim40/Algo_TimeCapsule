function convertHTML(str) {
  let result = '';
  for (let c of str) {
    if (c === '&') result += '&amp;';
    else if (c === '<') result += '&lt;';
    else if (c === '>') result += '&gt;';
    else if (c === '"') result += '&quot;';
    else if (c === "'") result += '&apos;';
    else result += c;
  }
  return result;
}

convertHTML('Dolce & Gabbana');
