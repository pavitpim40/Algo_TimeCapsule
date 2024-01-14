function truthCheck(collection, pre) {
  let result = true;
  for (let obj of collection) {
    if (!obj[pre]) result = false;
  }
  return result;
}

truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'isBot'
);
