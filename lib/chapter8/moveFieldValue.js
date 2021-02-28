// move dicsountRate from Customer to CustomerContract
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {return this._contract.discountRate;}
  _setDiscountRate(aNumber) {this._contract.discountRate = aNumber;}
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.subtract(amount * this.discountRate);
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  get discountRate() {return this._discountRate;}
  set discountRate(arg) {return this._discountRate = arg;}
}

aCustomer = new Customer({name: "Take", discountRate: 0.6});
