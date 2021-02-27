class Acount {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this._daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (this._daysOverdrawn - 7) * 0.85;
    }
    else
      return this._daysOverdrawn * 1.75;
  }
}
