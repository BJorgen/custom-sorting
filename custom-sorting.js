var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(student1, student2) {
  return student1.name === student2.name ? student2.age - student1.age : student1.name > student2.name;
})

console.log(students)
