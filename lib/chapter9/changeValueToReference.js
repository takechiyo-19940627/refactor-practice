class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
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

let _repositoryData;

function initialize() {
  _repositoryData = {};
  _repositoryData.customers = new Map();
}

function registerCustomer() {
  if (! _repositoryData.customers.has(id))
    _repositoryData.customers.set(id, new Customer(id));
  return findCustomer(id);
}

function findCustomer(id) {
  return _repositoryData.customers.get(id);
}
