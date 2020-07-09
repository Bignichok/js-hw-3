let employeesKey;
let employeesKeyArr = [];

const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  const values = Object.values(employees);

  let maxValues = values[0];
  let bestEmploye;

  for (let i = 0; i < values.length; i += 1) {
    if (maxValues <= values[i]) {
      maxValues = values[i];
      bestEmploye = keys[i];
    }
  }

  return bestEmploye;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
