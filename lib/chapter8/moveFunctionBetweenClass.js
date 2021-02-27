// 口座の種類ごとに手数料計算のアルゴリズムを切り替えるような変更が見込まれている
class Acount {
  constructor(data) {
    this._daysOverdrawn = data.daysOverdrawn;
    this._type = new AccountType(data);
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get type() {return this._type;}

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

class AccountType {
  constructor(data) {
    this._isPremium = data.isPremium;
  }

  get isPremium() {return this._isPremium;}

  overdraftCharge(daysOverdrawn) {
    if (this._isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (daysOverdrawn - 7) * 0.85;
    }
    else
      return daysOverdrawn * 1.75;
  }
}
