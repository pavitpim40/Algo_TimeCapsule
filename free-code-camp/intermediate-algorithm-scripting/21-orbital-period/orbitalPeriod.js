function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let skyObject of arr) {
    const orbitRadius = earthRadius + skyObject.avgAlt;
    skyObject.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(orbitRadius ** 3 / GM));
    delete skyObject.avgAlt;
  }

  return arr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
