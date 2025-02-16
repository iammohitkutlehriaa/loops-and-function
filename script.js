//Q1  program to print the marks of a student in an obeject using for loop;

let marks = {
  mohit: 99,
  lakshay: 9,
  akshit: 4,
  ayush: 89,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "This marks of ",
    Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]]
  );
}

//Done;

// program in Q1nusing for in loop;

for (let key in marks) {
  console.log("The marks of ", key, "are", marks[key]);
}

//Done;

// Q3 program to print try again until user enters the correct number

let cn = 4;
let j;
while (j != cn) {
  console.log("Opps try agian");
  j = parseInt(prompt("Enter a number"));
}
console.log("Booyah you have enter a correct number", cn);

//Done

// Q4 create a function to create mean of 4 numbers

const mean = (e, f, g, h) => {
  return (e + f + g + h) / 4;
};

console.log(mean(3, 4, 5, 6));
