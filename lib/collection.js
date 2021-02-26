class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {return this._name;}
  get courses() {return this._courses;}
  set courses(aList) {this._courses = aList.slice();}

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {return this._name;}
  get _isAdvanced() {return this._isAdvanced;}
}

// client 1
let aPerson = new Person({name: "Jack"});
numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;

// client 2
const filename = ["test-1", "test-2", "test-3"];
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false)) ;

function readBasicCourseNames(filename) {
  return filename;
}

// client 3
for (const name of readBasicCourseNames(filename)) {
  aPerson.addCourse(new Course(name, isAdvanced));
}

