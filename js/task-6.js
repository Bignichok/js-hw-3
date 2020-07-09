const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let obj;
  let total = 0;
  const productNameLowerCase = productName.toLowerCase();

  for (let i = 0; i < allProdcuts.length; i += 1) {
    obj = allProdcuts[i];

    const objName = obj.name;
    const objNameLowerCase = objName.toLowerCase();

    if (objNameLowerCase === productNameLowerCase) {
      total = obj.price * obj.quantity;
    }
  }

  return total;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "радар")); // 5200

console.log(calculateTotalPrice(products, "захВат")); // 2400
