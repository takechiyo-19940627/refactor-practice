class Person {
  constructor(data) {
    this._name = data.name;
    this._telephoneNumber = new TelephoneNumber(data);
  }

  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get telephoneNumber() {return this._telephoneNumber.toString();}
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {return this._telephoneNumber.areaCode = arg;}
  get officeNumber() {return this._telephoneNumber.officeNumber;}
  set officeNumber(arg) {return this._telephoneNumber.officeNumber = arg;}
}

class TelephoneNumber {
  constructor(data) {
    this._areaCode = data.areaCode;
    this._number = data.number;
  }
  get telephoneNumber() {return `${this.areaCode} ${this.number}`;}
  get areaCode() {return this._areaCode;}
  set areaCode(arg) {return this._areaCode = arg;}
  get number() {return this._number;}
  set number(arg) {return this._number = arg;}

  toString() {return `${this.areaCode} ${this.number}`;}
}
