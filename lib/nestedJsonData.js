// ネストしたjsonデータの扱い
const rawData = {
  "1920": {
    name: "martin",
    id: 1920,
    usages: {
        "2016": {
            "1": 50,
            "2": 55,
        },
        "2015": {
            "1": 70,
            "2": 63,
        }
    }
  },
  "38673": {
    name: "neal",
    id: "38673",
  }
};

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}

function getCustomerData() {return customerData;}

function getRawDataOfCustomers() {return  customerData._data;}

function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg)}

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

// update amount
getRawDataOfCustomers()[customerID].usages[year][month] = amount;

// update
setUsage(customerID, year, month, amount);
