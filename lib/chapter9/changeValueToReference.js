class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }

  get customer() {return this._customer;}
}

class Customer {
  constructor(id) {
    this._id = id;
  }
  get id() {return this._id;}
}

const data = {
  number: 1,
  customer: 10
};

aOrder = new Order(data);
console.log(aOrder.customer);
