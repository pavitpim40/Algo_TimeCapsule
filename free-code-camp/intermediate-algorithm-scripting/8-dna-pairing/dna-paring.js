function pairElement(str) {
  const hash = { A: 'T', T: 'A', G: 'C', C: 'G' };
  return str.split('').map((c) => [c, hash[c]]);
}

pairElement('GCG');
