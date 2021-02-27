class Customer {
  
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }

  get discountRate() {return this._discountRate;}
  becomePreferred() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}

aCustomer = new Customer({name: "Take", discountRate: 0.6});
