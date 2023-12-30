function feasible(newspapersReadTimes, numCoworkers, maxTimePerCoworker) {
  let coWorkerCount = 1;
  let coWorkerTimeToRead = 0;
  for (let time of newspapersReadTimes) {
    if (time > maxTimePerCoworker) return false;
    if (coWorkerTimeToRead + time <= maxTimePerCoworker) {
      coWorkerTimeToRead += time;
    } else {
      coWorkerCount++;
      coWorkerTimeToRead = time;
    }
  }
  if (coWorkerCount <= numCoworkers) return true;
  return false;
}

function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let min = Math.max(...newspapersReadTimes);
  let hight = newspapersReadTimes.reduce((a, c) => a + c, 0);
  let timeToRead = 0;
  while (min <= hight) {
    let mid = min + Math.floor((hight - min) / 2);
    let f = feasible(newspapersReadTimes, numCoworkers, mid);
    if (f) {
      hight = mid - 1;
      timeToRead = mid;
    } else {
      min = mid + 1;
    }
  }

  return timeToRead;
}

newspapersSplit([7, 2, 5, 10, 8], 2); // 18
newspapersSplit([1, 4, 4], 3); // 4
