class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {this._data.name = aString;}

  get name() {return this._data.name;}
}

// 下記はプログラム全体で利用されている変数と仮定する
const organization = new Organization({name: "Acme Gooseberries", country: "GB" });

// 下記のように利用される
result += `<h1>${getOrganization().name}</h1>`;

// 下記のように更新される
getOrganization().name = newName;

// 変数のカプセル化
function getRawDataOfOrganization() {return organization._data;}

function getOrganization() {return organization;}
