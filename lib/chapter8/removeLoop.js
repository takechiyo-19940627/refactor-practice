// 一回のループで処理したいというだけの理由で、2つの異なる処理を同時に行っていると、片方を変更したいときに、必ず両方の処理内容を理解しないといけなくなる

// 給与総額と最年少を求める短いコードを例とする
const people = [
  {
    age: 18,
    salary: 180,
  },
  {
    age: 20,
    salary: 200,
  },
  {
    age: 25,
    salary: 250,
  },
];

calculateTotalSalary(people);

function calculateTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;

  for (const p of people) {
    totalSalary += p.salary;
  }

  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
