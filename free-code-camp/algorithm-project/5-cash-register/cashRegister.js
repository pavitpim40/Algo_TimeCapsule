function createOutput(status, changeArr) {
  return { status, change: changeArr };
}

function calBalanceInMachine(cid) {
  return cid.reduce((a, c) => a + c[1], 0);
}

function selectCashTypeArr(change, cid) {
  for (let i = cid.length - 1; i >= 0; i--) {
    let unitValue = convertUnitToValue(cid[i][0]);
    let balanceValue = cid[i][1];
    // console.log("AA",unitValue, change,balanceValue)
    if (balanceValue !== 0 && unitValue <= change) return cid[i];
  }
}

function convertUnitToValue(unit) {
  switch (unit) {
    case 'ONE HUNDRED':
      return 100;
    case 'TWENTY':
      return 20;
    case 'TEN':
      return 10;
    case 'FIVE':
      return 5;
    case 'ONE':
      return 1;
    case 'QUARTER':
      return 0.25;
    case 'DIME':
      return 0.1;
    case 'NICKEL':
      return 0.05;
    case 'PENNY':
      return 0.01;
    default:
      return 0;
  }
}

function reduceCash(cashArr, value) {
  cashArr[1] -= value;
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let allChange = calBalanceInMachine(cid);
  if (allChange < change) return createOutput('INSUFFICIENT_FUNDS', []);
  else if (allChange == change) return createOutput('CLOSED', cid);

  const changeArr = [];
  while (change != 0) {
    let cashArr = selectCashTypeArr(change, cid);
    if (!cashArr) return createOutput('INSUFFICIENT_FUNDS', []);

    let unitName = cashArr[0];
    let value = convertUnitToValue(unitName);

    let foundIndex = changeArr.findIndex((el) => el[0] == unitName);
    if (foundIndex != -1) changeArr[foundIndex][1] += value;
    else changeArr.push([unitName, value]);

    reduceCash(cashArr, value);
    change = +(change - value).toFixed(2);
  }

  return createOutput('OPEN', changeArr);
}
