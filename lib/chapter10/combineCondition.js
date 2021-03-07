class Employee {
  constructor(data) {
    this._seniority = data.seniority;
    this._monthsDisabled = data.monthsDisabled;
    this._isPartTime = data.isPartTime;
  }

  get seniority() {return this._seniority;}
  get monthsDisabled() {return this._monthsDisabled;}
  get isPartTime() {return this._isPartTime;}
}

const data = {
  seniority: 25,
  monthsDisabled: 5,
  isPartTime: false,
}

const anEmployee = new Employee(data);

console.log(disabilityAmount(anEmployee));

function disabilityAmount(anEmployee) {
  if ((anEmployee.seniority < 2)
    || (anEmployee.monthsDisabled > 12)
    || (anEmployee.isPartTime)) return 0;
  // 障害手当を計算する
  if (anEmployee.onVacation)
    if (anEmployee.seniority > 10)
    return 1;
  return 0.5;
}
