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

  write(arg) { 
    this._outStream.push(arg);
    console.log(this._outStream);
  }

  get outStream() {return this._outStream;}
}

const data = {
  name: "taro",
  title: "trip",
  location: "Kyoto",
  date: new Date(),
}

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  console.log(outStream.outStream);
}

function listRecentPhotos(outStream, photos) {
  photos.filter(p => p.date > recentDateCutOff())
        .forEach(p => {
          outStream.write("<div>\n");
          emitPhotoData(outStream, p);
          outStream.write("</div>\n");
        });
}

function recentDateCutOff() {}

function renderPhoto(outStream, aPhoto) {}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

var outStream = new OutStream();
var aPerson = new Person(data);
renderPerson(outStream, aPerson);
