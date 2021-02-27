class Person {
  constructor(data) {
    this._department = new Department(data.department);
  }

  get manager() {return this._department.manager}

  get department() {return this._department};
}

class Department {
  constructor(aString) {
    this._manager = managers().filter(m => m.department === aString);
  }

  static managers() {
    return [{name: "Jack", department: "sales"}, {name: "Pim", department: "engineer"}];
  }

  get manager() {return this._manager;}
}

// client
aPerson = new Person({department: "sales"});
manager = aPerson.department.manager;
