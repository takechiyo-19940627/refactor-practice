// 鳥のコレクションがあり、どの鳥がどれくらい速く飛べるのか、どんな羽毛を持っているのかわかるプログラム

class Bird {
  constructor(birdObject) {
    this._name = birdObject.name;
    this._type = birdObject.type;
    this._numberOfCoconuts = birdObject.numberOfCoconuts;
    this._voltage = birdObject.voltage;
    this._isNailed = birdObject.isNailed;
  }

  get name() {return this._name;}
  get type() {return this._type;}
  get numberOfCoconuts() {return this._numberOfCoconuts;}
  get voltage() {return this._voltage;}
  get isNailed() {return this._isNailed;}

  get plumage() {
    return 'unknown';
  }

  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "average";
  }

  get airSpeedVelocity() {
    return 35
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCoconuts > 2) ? "tired" : "average";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? "scorched" : "beautiful";
  }

  get airSpeedVelocity() {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10;
  }
}

const firstb = new Bird({name: "bird1", type: "EuropeanSwallow", numberOfCoconuts: 1, voltage: 5, isNailed: false});
const secondb = new Bird({name: "bird2", type: "AfricanSwallow", numberOfCoconuts: 2, voltage: 8, isNailed: true});
const thirdb = new Bird({name: "bird3", type: "NorwegianBlueParrot", numberOfCoconuts: 3, voltage: 11, isNailed: false});
const forthb = new Bird({name: "bird4", type: "NewType", numberOfCoconuts: 3, voltage: 4, isNailed: false});

const birds = [
  firstb,
  secondb,
  thirdb,
  forthb,
];

console.log(plumages(birds));
console.log(speeds(birds));

function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
  case 'EuropeanSwallow':
    return new EuropeanSwallow(bird);
  case 'AfricanSwallow':
    return new AfricanSwallow(bird);
  case 'NorwegianBlueParrot':
    return new NorwegianBlueParrot(bird);
  default:
    return new Bird(bird);
  }
}