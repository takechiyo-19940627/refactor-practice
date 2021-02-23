reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client1
const aReading = acquireReading();
const baseChange = baseRate(aReading.month, aReading.year) * aReading.quantity;

// Client2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableChange = Math.max(0, base - taxThreshold(aReading.year));

// Client3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
