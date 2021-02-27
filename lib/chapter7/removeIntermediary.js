class Person {
  constructor(data) {
    this._department = new Department(data.department);
  }

  get manager() {return this._department.manager}

  get department() {return this._department};
}

class Department {
  constructor(aString) {
    const managers = [{name: "Jack", department: "sales"}, {name: "Pim", department: "engineer"}];
    this._manager = managers.filter(m => m.department === aString);
  }

  get manager() {return this._manager;}
}

// client
aPerson = new Person({department: "sales"});
manager = aPerson.department.manager;
