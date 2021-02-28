class Person {
  constructor(data) {
    this._name = data.name;
    this._photo = new Photo(data.title, data.location, data.date);
  }

  get name() {return this._name;}
  get photo() {return this._photo;}
}

class Photo {
  constructor(title, location, date) {
    this._title = title;
    this._location = location;
    this._date = date;
  }

  get title() {return this._title;}
  get location() {return this._location;}
  get date() {return this._date;}
}

const data = {
  name: "taro",
  title: "trip",
  location: "Kyoto",
  date: new Date(),
}

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(zznew(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return [
    "<div>",
    zznew(p),
    "</div>",
  ].join("\n");
}

function renderPhoto(aPhoto) {}

function zznew(p) {
  return [
    `<p>title: ${p.title}</p>`,
    `<p>location: ${p.location}</p>`,
    `<p>date: ${p.date.toDateString()}</p>`,
  ].join("\n");
}

var aPerson = new Person(data);
renderPerson('a', aPerson);
