class PlanDate {
  constructor(aDate) {
    this._date = aDate;
  }

  isBefore(aDate) {
    return aDate < this._date;
  }

  isAfter(aDate) {
    return aDate >= this._date;
  }
}

const aDate = new PlanDate(Date());
const plan = {
  summerStart: new Date(2021, 08, 01),
  summerEnd: new Date(2021, 08, 31),
  regularRate: 7,
  regularServiceCharge: 5,
}
const quantity = 10;

calculate(aDate, plan, 10);

function calculate(aDate, plan, quantity) {
  if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate;
  } else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
  }
  console.log(charge);
}

