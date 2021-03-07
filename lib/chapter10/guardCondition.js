class Employee {
  constructor(isSeparated) {
    this._isSeparated = isSeparated;
  }

  get isSeparated() {return this._isSeparated;}
}

const isSeparated = false;

const anEmployee = new Employee(isSeparated);

console.log(payAmount(anEmployee));

function payAmount(employee) {
  let result;
  if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
  if (employee.isRetired) {
    result = {amount: 0, reasonCode: "RET"};
  } else {
    // 金額を計算するロジックがあると仮定する
    result = 1200;
  }
  return result;
}