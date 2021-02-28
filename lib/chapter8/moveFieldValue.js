// move dicsountRate from Customer to CustomerContract
class Customer {
  
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    this._contract = new CustomerContract(new Date(), this.discountRate);
  }

  get discountRate() {return this._discountRate;}
  _setDiscountRate(aNumber) {this._discountRate = aNumber;}
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
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
