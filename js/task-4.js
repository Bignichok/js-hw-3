const countTotalSalary = function (emploees) {
  const values = Object.values(emploees);

  let totalSalary = 0;
  for (const value of values) {
    totalSalary += value;
  }
  return `total salary: ${totalSalary}`;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
