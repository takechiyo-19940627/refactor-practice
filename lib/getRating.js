// NOTE: 元コード①
// function getRating(driver) {
//   return moreThanFiveLateDeliveries(driver) ? 2 : 1;
// }

// function rating(aDriver) {
//   return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
// }

// 修正後コード①
function moreThanFiveLateDeliveries(driver) {	
  return aDriver.numberOfLateDeliveries > 5;
}

// 元コード②
// function reportLines(aCustomer) {
//   const lines = [];
//   gatherCustomerData(lines, aCustomer);
//   return lines;
// }
// function gatherCustomerData(out, aCustomer) {
//   out.push(["name", aCustomer.name]);
//   out.push(["location", aCustomer.location]);
// }

// 修正後コード②
function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}
function gatherCustomerData(out, aCustomer) {
  out.push(["location", aCustomer.location]);
}
