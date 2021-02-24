// ネストしたjsonデータの扱い
const customerData = {
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

customerData[customerID].usages[year][month] = amount;

function compareUsage(customerID, laterYear, month) {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return {laterAmount: later, change: later - earlier};
}

function getRawDataOfCustomers() {return  customerData;}

function setRawDataOfCustomers(arg) {customerData = arg;}

// update amount
getRawDataOfCustomers()[customerID].usages[year][month] = amount;
