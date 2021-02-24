// 下記はプログラム全体で利用されている変数と仮定する
const organization = {name: "Acme Gooseberries", country: "GB" };

// 下記のように利用される
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

// 下記のように更新される
getRawDataOfOrganization().name = newName;

// 変数のカプセル化
function getRawDataOfOrganization() {
  return organization;
}
