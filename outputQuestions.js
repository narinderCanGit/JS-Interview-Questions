function getItems() {
  return null;
}
// Don't make changes in getItems

// let [x =3 , y= 5] = getItems();
let [x = 3, y = 5] = getItems() ?? []; //answer

// console.log(x)
// console.log(y)

//-------------------------------------------------------------------------------------------

const input = [1, 2, 3, 4];
const a1 = input.filter((n) => n++);
const a2 = input.map((n) => n++);
const a3 = input.forEach((n) => n++);

// console.log(a1, a2, a3);

//------------------------------------------------------------------------------------------

// console.log(2 * 1 + 9);
// console.log(2 + 2 * 10); 

//------------------------------------------------------------------------------------------

//* Object destructuring
const user = {
  id: 339,
  name: "Fred",
  age: 42,
  education: {
    degree: "Masters",
    school: "Anna Univ",
  },
};
let {
  education: { school },
} = user;
// console.log(school);

//------------------------------------------------------------------------------------------

async function test() {
  try {
    const res = await fetch("");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
