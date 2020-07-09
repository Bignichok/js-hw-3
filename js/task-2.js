const countProps = function (obj) {
  obj = Object.keys(obj);

  return obj.length;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
