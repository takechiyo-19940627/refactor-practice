class Person {
  constructor(data) {
    this._telephoneNumber = new TelephoneNumber(data.areaCode, data.number);
  }
  
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
  get officeNumber() {return this._telephoneNumber.number;}
  set officeNumber(arg) {this._telephoneNumber.number = arg;}
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
}

const data = {
  areaCode: 111111,
  number: 222222
};

let aPerson = new Person(data);
console.log(aPerson.officeAreaCode);
