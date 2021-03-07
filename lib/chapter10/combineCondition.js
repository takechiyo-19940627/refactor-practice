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
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // 障害手当を計算する
  return 1200;
}
