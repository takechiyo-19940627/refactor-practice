class ProductionPlan {
  constructor(data) {
    this._production = data.production;
    this._adjustments = [];
  }
  get production() {return this._adjustments.reduce((sum, a) => sum + a.amount, 0);}

  get calculatedProduction() {
    
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}