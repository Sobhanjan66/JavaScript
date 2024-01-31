const arr = [1,2,3,4,5]
const myHeros = ["IronMan","SuperMan","SpiderMan"]
const arr2 = new Array(6,7,8,9)

console.log(arr[0]);
console.log(arr2[1]);

//Array Methods

arr.push(6)
arr.push(7)
arr.pop()
console.log(arr);

arr2.unshift(10) //to push at first index
console.log(arr2);
arr2.shift() // remove first index value 
console.log(arr2);

console.log(arr.includes(9))
console.log(arr.indexOf(9))
console.log(arr.indexOf(3))

const newArr = arr.join()
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// Use & difference of Slice & Splice methods in array

const array = [11,22,33,44,55]

console.log("A", array);
console.log(array.slice(1,3));
console.log("B", array);
console.log(array.splice(1,3)); // splice cut down the selected portion from array & then print that & manipulate/change the original array
console.log("C", array);

const marvel_heros = ["Ironman","Doctor Strange","Captain America"];
const dc_heros = ["Batman","Superman","Flash"];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros); //[
//     'Ironman',
//     'Doctor Strange',
//     'Captain America',
//     [ 'Batman', 'Superman', 'Flash' ]
//   ]
//console.log(marvel_heros[3][2]);
//marvel_heros.concat(dc_heros);
//console.log(marvel_heros); //Same Output as push method
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const another = another_array.flat(Infinity)
console.log(another);

console.log(Array.isArray("Sobhanjan"));
console.log(Array.from("Sobhanjan"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));