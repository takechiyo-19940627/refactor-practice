class Person {
  constructor(data) {
    _name = data.name;
    _officeAreaCode = data.officeAreaCode;
    _officeNumber = data.officeNumber;
  }

  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get telephoneNumber() {return `${this.officeAreaCode} ${this.officeNumber}`;}
  get officeAreaCode() {return this._officeAreaCode;}
  set officeAreaCode(arg) {return this._officeAreaCode = arg;}
  get officeNumber() {return this._officeNumber;}
  set officeNumber(arg) {return this.officeNumber = arg;}
}
