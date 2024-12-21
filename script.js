/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") console.log(employee);
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") console.log(employee);
  });
}

function addData() {
  const addEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(addEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((employee) => {
    return employee.profession !== "admin";
  });
  console.log(arr);
}

function concatenateArray() {
  const newEmployeeData = [
    { id: 5, name: "bob", age: "19", profession: "developer" },
    { id: 6, name: "jonas", age: "25", profession: "intern" },
    { id: 7, name: "abhishek", age: "23", profession: "admin" },
  ];
  arr = arr.concat(newEmployeeData);
  console.log(arr);
}
