// const user = {
//   name: "Evez",
//   surname: "Memmedli",
// };
// const myArr = [1, "string", true, undefined, null, user, myNumbers];

const names = ["Evez", "Ali", "Isa", "Sabir", "Mammad"];
const myNumbers1 = [1, 2, 3, 4];
const myNumbers2 = [5, 6, 7, 8];
const myNumbers3 = [12, 9, 10, 11];
const multipdimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const students = [
  {
    name: "Evez",
    surname: "Memmedli",
    age: 24,
  },
  {
    name: "Isa",
    surname: "Sadiqli",
    age: 20,
  },
  {
    name: "Ayxan",
    surname: "Agayev",
    age: 18,
  },
  {
    name: "Fexri",
    surname: "Efendiyev",
    age: 21,
  },
  {
    name: "Mammad",
    surname: "Agayev",
    age: 18,
  },
  {
    name: "Ali",
    surname: "Efendiyev",
    age: 21,
  },
  {
    name: "Alib",
    surname: "Efendiyev",
    age: 21,
  },
];

// console.log(myNumbers1.concat(myNumbers2));

// console.log(myNumbers1.copyWithin(1, 3));

function calculate(number) {
  console.log(number * 10);
}

const isAllConditionMet = myNumbers1.every((element, index, myarr) => {
  if (element < 2) {
    return true;
  }
});

// myNumbers1.fill(10, 2, 3);

const filteredStudends = students.filter((student) => {
  if (student.age === 30) {
    return true;
  }
});

const studentAyxan = students.find((student) => {
  if (student.name === "Ayxan") {
    return true;
  }
});

// myNumbers1.forEach((number) => {
//   console.log(number);
// });

const fromArr = Array.from(students, (student) => {
  return student.age * 2;
});

// console.log(myNumbers2.includes(7))

const joinedNumbers = myNumbers1.join(",");

// console.log(typeof joinedNumbers);

// console.log(studentAyxan?.name);

// const mappedNumbers = myNumbers1.map((element) => {
//   return element ** 2;
// });

// const mappedStudents = students.map((student) => {
//   return student.name
// })

// console.log(mappedStudents);

// const flatMappedArray = myNumbers1.flatMap((number) => {
//   return [number * 2];
// });

// console.log(Array.of(10))

// console.log(Array(10).fill("Sabir"));

// myNumbers1.pop()
// myNumbers1.shift();

// students.push({
//   name: "Oruc",
//   surname: "Dostuyev",
//   age: 17,
// });

// students.unshift({
//   name: "Oruc",
//   surname: "Dostuyev",
//   age: 17,
// });

// const sum = students.reduce((previous, current) => {
//   return previous + current.age;
// }, 0);

// console.log(sum);

// const myStr = "Salam";
// console.log(myStr.split("").reverse().join(""));

const isAyxanThere = students.some((student) => {
  if (student.name === "Ayxan") {
    return true;
  }
});

// myNumbers3.sort((a, b) => {
//   if (a < b) return -1;
//   if (b < a) return 1

//   return 0
// });

// myNumbers3.sort((a, b) => {
//   return a - b;
// });

// students.sort((user1, user2) => {
//   if (user1.name < user2.name) return -1;
//   if (user1.name > user2.name) return 1;

//   return 0;
// });

// names.sort((a, b) => {
//   return a - b;
// });

// console.table(names);

Array.prototype.customMap = function (callback) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    const resultFromCallback = callback(this[i], i, this);
    mapped.push(resultFromCallback);
  }

  return mapped;
};

const mappedStudents = students.customMap((student, index, array) => {
  return student.age * 2;
});

function CustomArray() {
  return ["test", "test 2", "test 3"]
}

CustomArray.prototype.forEach = function () {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const elements = new CustomArray()

console.log(elements)

elements.forEach((element) => {
  console.log(element)
})