class Employee {
  constructor(isSeparated, isRetired) {
    this._isSeparated = isSeparated;
    this._isRetired = isRetired;
  }

  get isSeparated() {return this._isSeparated;}
  get isRetired() {return this._isRetired;}
}

const isSeparated = false;
const isRetired = false;

const anEmployee = new Employee(isSeparated, isRetired);

console.log(payAmount(anEmployee));

function payAmount(employee) {
  let result;
  if (employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
  if (employee.isRetired) return {amount: 0, reasonCode: "RET"};
  // 金額を計算するロジックがあると仮定する
  result = 1200;
  return result;
}