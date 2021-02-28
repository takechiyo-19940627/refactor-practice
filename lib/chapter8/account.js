class Acount {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }
  get interestRate() {return this._type.interestRate;}
}

class AccountType {
  constructor(nameString, interestRate) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {return this._interestRate;}
}

aAcount = new Acount(1, new AccountType('test', 0.1))
console.log(aAcount.interestRate);