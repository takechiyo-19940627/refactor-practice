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

class OutStream {
  constructor() {
    this._outStream = [];
  }

  write(arg) {this._outStream.push(arg);}

  get outStream() {return this._outStream;}
}

const data = {
  name: "taro",
  title: "trip",
  location: "Kyoto",
  date: new Date(),
}

var outStream = new OutStream();
var aPerson = new Person(data);
renderPerson(outStream, aPerson);
console.log(outStream.outStream);

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  zztmp(outStream, person.photo);
  outStream.write(`<p>location: ${person.photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos.filter(p => p.date > recentDateCutOff())
        .forEach(p => {
          outStream.write("<div>\n");
          outStream.write("</div>\n");
        });
}

function recentDateCutOff() {}

function renderPhoto(outStream, aPhoto) {}

function zztmp(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}
