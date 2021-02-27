class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {return this._priority;}
  get priorityString() {return this._priority.toString();}
  set priority(aString) {this._priority = new Priority(aString);}
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value))
      this._value = value;
    else
      throw new Error(`<${value}> is invalid for priority`);
  }
  toString() {return this._value;}
  get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
  static legalValues() {return ['low', 'normal', 'high', 'rush'];}

  equals(other) {return this._index === other._index}
  higherThan(other) {return this._index > other._index;}
  lowerThan(other) {return this._index < other._index;}
}

const orders = [new Order({priority: "high"})];

// client
highPriorityCount = orders.filter(o => "high" === o.priority.toString || "rush" === o.priority.toString).length;
