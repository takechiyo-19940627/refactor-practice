// 口座の種類ごとに手数料計算のアルゴリズムを切り替えるような変更が見込まれている

const data = {
  daysOverdrawn: 10,
  isPremium: false,
}
class Acount {
  constructor(data) {
    this._daysOverdrawn = data.daysOverdrawn;
    this._type = new AccountType(data);
  }

  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this);
    return result;
  }

  get daysOverdrawn() {return this._daysOverdrawn;}

  get type() {return this._type;}
}

class AccountType {
  constructor(data) {
    this._isPremium = data.isPremium;
  }

  get isPremium() {return this._isPremium;}

  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7)
        return baseCharge;
      else
        return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    }
    else
      return account.daysOverdrawn * 1.75;
  }
}

aAcount = new Acount(data);
aAcount.bankCharge;