function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = {amount: 0, reasonCode: "SEP"};
  } else {
    if (employee.isRetired) {
      result = {amount: 0, reasonCode: "RET"};
    } else {
      // 金額を計算するロジックがあると仮定する
    }
  }
}