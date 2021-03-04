class ProductionPlan {
  constructor(data) {
    this._production = data.production;
    this._adjustments = [];
  }
  get production() {return this._production;}
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}