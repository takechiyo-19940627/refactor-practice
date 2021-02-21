// import createStatementData  from "./createStatementData.js";

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

// NOTE: 実行箇所
statement (invoices[0], plays);

function statement (invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
                { style: "currency", currency: "USD",
                  minimumFranctionDigits: 2 }).format(aNumber/100);
  }
}



// TODO:別ファイルに分ける
function createStatementData(invoice, plays) {
  class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
      this.performance = aPerformance;
      this.play = aPlay;
    }
  
    get amount() {
      throw new Error(`unknown type: ${this.performance.play.type}`);  
    }
  
    get volumeCredits() {
      let result = 0;
      result += Math.max(this.performance.audience - 30, 0);
      return result;
    }
  }
  
  class TragedyCalculator extends PerformanceCalculator {
    get amount() {
      let result = 40000;
      if (this.performance.audience > 30) {
        result += 1000 * (this.performance.audience - 30);
      }
      return result;
    }
  }
  
  class ComedyCalculator extends PerformanceCalculator {
    get amount() {
      let result = 30000;
      if (this.performance.audience > 20) {
        result += 10000 + 500 * (this.performance.audience - 20);
      }
      result += 300 * this.performance.audience;
      return result;
    }
  
    get volumeCredits() {
      return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
  }
  
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function createPerformanceCalculator(aPerformance, aPlay) {
    switch(aPlay.type) {
      case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
      case "comedy": return new ComedyCalculator(aPerformance, aPlay);
      default:
        throw new Error(`unknown performance type: ${aPlay.type}`);
    }
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }
}
