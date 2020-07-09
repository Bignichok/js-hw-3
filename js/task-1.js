const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.log("mood :", user.mood);
console.log("hobby :", user.hobby);
console.log("premium :", user.premium);

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log("new mood :", user.mood);
console.log("new hobby :", user.hobby);
console.log("new premium :", user.premium);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}
