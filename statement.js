// NOTE: 必要なデータ
var plays = {
  "hamlet": {"name": "Hamlet", "type": "tragedy"},
  "as-like": {"name": "As You Like It", "type": "comedy"},
  "othello": {"name": "Othelo", "type": "tragedy"}
};
var invoices = [
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40
      }
    ]
  }
];
statement (invoices[0], plays);

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // ボリューム特典のポイントを加算
    volumeCredits += volumeCreditsFor(perf);
    // 喜劇のときは10人につきさらにポイントを加算
    if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
    // 注文の内訳を出力
    result += `${playFor(perf).name}: ${format(amountFor(perf)/100)} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }
  result += `Amount owed is ${format(totalAmount/100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 400000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) volumeCredits += Math.floor(aPerformance.audience / 5);
    return volumeCredits;
  }

  function format(aNumber) {
    return new Intl.NumberFormat("en-US",
                { style: "currency", currency: "USD",
                  minimumFranctionDigits: 2 }).format(aNumber);
  }
}
