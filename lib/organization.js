class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {return this._name;}
  set name(aString) {this._name = aString;}
  get country() {return this._country;}
  set country(aCountryCode) {this._country = aCountryCode;}
}

// 下記はプログラム全体で利用されている変数と仮定する
const organization = new Organization({name: "Acme Gooseberries", country: "GB" });

// 下記のように利用される
result += `<h1>${getOrganization().name}</h1>`;

// 下記のように更新される
getOrganization().name = newName;

function getOrganization() {return organization;}
