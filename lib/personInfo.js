class Person {
  constructor(data) {
    _name = data.name;
    this._telephoneNumber = new TelephoneNumber();
    _officeAreaCode = data.officeAreaCode;
    _officeNumber = data.officeNumber;
  }

  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get telephoneNumber() {return this._telephoneNumber.telephoneNumber;}
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {return this._telephoneNumber.areaCode = arg;}
  get officeNumber() {return this._telephoneNumber.officeNumber;}
  set officeNumber(arg) {return this._telephoneNumber.officeNumber = arg;}
}

class TelephoneNumber {
  get telephoneNumber() {return `${this.areaCode} ${this.number}`;}
  get areaCode() {return this._areaCode;}
  set areaCode(arg) {return this._areaCode = arg;}
  get number() {return this._number;}
  set number(arg) {return this._number = arg;}
}
