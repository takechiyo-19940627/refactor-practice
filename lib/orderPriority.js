class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [new Order({priority: "high"})];

// client
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
