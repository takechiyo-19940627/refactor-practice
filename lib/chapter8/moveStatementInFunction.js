class Person {
  constructor(data) {
    this._name = data.name;
    this._photo = new Photo(data.title, data.location, data.date);
  }

  get name() {return this._name;}
}

class Photo {
  constructor(title, location, date) {
    this._title = title;
    this._location = location;
    this._date = date;
  }

  get title() {return this._title;}
}

const data = {
  name: "taro",
  title: "trip",
  location: "Kyoto",
  date: new Date(),
}

var aPerson = new Person(data);

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result;
}

function photoDiv(p) {
  return [
    "<div>",
    zznew(p),
    "</div>",
  ].join("\n");
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
}

function zznew(p) {
  return [
    `<p>title: ${p.title}</p>`,
    emitPhotoData(p),
  ].join("\n");
}
