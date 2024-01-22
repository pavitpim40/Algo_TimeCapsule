function initChangeArr() {
  return [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ];
}

function createOutput(status, changeArr) {
  return { status, change: changeArr };
}

function calBalanceInMachine(cid) {
  return cid.reduce((a, c) => a + c[1], 0);
}

function selectIndex(change) {
  if (change >= 100) return { index: 8, value: 100 };
  else if (change >= 20) return { index: 7, value: 20 };
  else if (change >= 10) return { index: 6, value: 10 };
  else if (change >= 5) return { index: 5, value: 5 };
  else if (change >= 1) return { index: 4, value: 1 };
  else if (change >= 0.25) return { index: 3, value: 0.25 };
  else if (change >= 0.1) return { index: 2, value: 0.1 };
  else if (change >= 0.05) return { index: 1, value: 0.05 };
  else if (change >= 0.01) return { index: 0, value: 0.01 };
  else return { index: -1, value: 0 };
}
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let allChange = calBalanceInMachine(cid);
  if (allChange < change) return createOutput('INSUFFICIENT_FUNDS', []);
  else if (allChange == change) return createOutput('CLOSED', cid);

  const changeArr = initChangeArr();
  let cutObject = selectIndex(change);

  do {
    let cutIndex = cutObject.index;
    let value = cutObject.value;
    console.log(change, cutIndex, cid[cutIndex]);
    if (cutIndex == -1) {
      return createOutput('INSUFFICIENT_FUNDS', []);
    }

    if (cutIndex != -1 && cid[cutIndex][1] !== 0) {
      change -= value;
      changeArr[cutIndex][1] += value;
      cutObject = selectIndex(change);
    } else {
      cutIndex--;
    }
  } while (change != 0 || cutObject.index != -1);

  return createOutput('OPEN', changeArr);
}
checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
