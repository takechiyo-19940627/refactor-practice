// 口座の種類ごとに手数料計算のアルゴリズムを切り替えるような変更が見込まれている

const data = {
  daysOverdrawn: 10,
  isPremium: false,
}
class Acount {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }
  get interestRate() {return this._interestRate;}
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}
