class Person {
  constructor(data) {
    this._telephoneNumber = new TelephoneNumber(data.areaCode, data.number);
  }
  
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }
  get officeNumber() {return this._telephoneNumber.number;}
  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {return this._areaCode;}
  set areaCode(arg) {this._areaCode = arg;}
  
  get number() {return this._number;}
  set number(arg) {this._number = arg;}

  equals(other) {
    if (!(other instanceof TelephoneNumber)) return false;
    return this.areaCode === other.areaCode && this.number === other.number;
  }
}

const data = {
  areaCode: 111111,
  number: 222222
};

let aPerson = new Person(data);
console.log(aPerson.officeAreaCode);
