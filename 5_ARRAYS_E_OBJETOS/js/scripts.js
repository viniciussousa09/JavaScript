// // 1 - arrays
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const items = ["Vinicius", true, 2, 4.12, []];

// console.log(items);

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr[4]);

// console.log(arr[3]);

// console.log(arr[25]);

// // 3 - propriedades
// const numbers = [5, 3, 4];

// console.log(numbers.length);

// console.log(numbers[`length`]);

// const myName = "Vinicius";

// console.log(myName.length);

// console.log(myName[`length`]);

// // 4 - métodos
// const othersNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(othersNumbers);

// console.log(allNumbers);

// const text = "Vinicius";

// console.log(text.toUpperCase());

// console.log(typeof text.toLocaleUpperCase);

// console.log(text.indexOf("i"));

// // 5 - object literals
// const person = {
//     name: "Vinicius",
//     age: "38",
//     job: "Programador"
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(person.age);

// console.log(person.job.length);

// console.log(typeof person);

// // 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     Km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.Km;

// console.log(car);

// // 7 - mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(obj);

// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutacão
// const a = {
//     name: "Vinicius"
// };

// const b = a;

// console.log(a);
// console.log(b);
// console.log(a === b);

// a.age = 38;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// 10 - loop em array
const users = ["Vinicius", "Giovanna", "Sophia", "Alice", "Daniel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);