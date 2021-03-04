// example1
// class ProductionPlan {
//   constructor(data) {
//     this._production = data.production;
//     this._adjustments = [];
//   }
//   get production() {return this._adjustments.reduce((sum, a) => sum + a.amount, 0);}

//   applyAdjustment(anAdjustment) {
//     this._adjustments.push(anAdjustment);
//   } 
// }

// example2
class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumlator = 0;
    this._adjustments = [];
  }
  get production() {
    return this._initialProduction + this._productionAccumlator;
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  } 
}
