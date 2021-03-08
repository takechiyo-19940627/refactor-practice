// 鳥のコレクションがあり、どの鳥がどれくらい速く飛べるのか、どんな羽毛を持っているのかわかるプログラム

class Bird {
  constructor(data) {
    this._name = data.name;
    this._type = data.type;
    this._numberOfCoconuts = data.numberOfCoconuts;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get name() {return this._name;}
  get type() {return this._type;}
  get numberOfCoconuts() {return this._numberOfCoconuts;}
  get voltage() {return this._voltage;}
  get isNailed() {return this._isNailed;}
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
  switch (bird.type) {
  case 'EuropeanSwallow':
    return "average";
  case 'AfricanSwallow':
    return (bird.numberOfCoconuts > 2) ? "tired" : "average";
  case 'NorwegianBlueParrot':
    return (bird.voltage > 100) ? "scorched" : "beautiful";
  default:
    return "unknown";
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
  case 'EuropeanSwallow':
    return 35;
  case 'AfricanSwallow':
    return 40 - 2 * bird.numberOfCoconuts;
  case 'NorwegianBlueParrot':
    return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
  default:
    return null;
  }
}
