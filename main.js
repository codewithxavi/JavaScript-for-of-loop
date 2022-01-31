const employees = ['Alexander', 'Anna', 'Zion'];

// Imperativo CÓMO
const results = [];
for (let i = 0; i < employees.length; i++) {
  if (employees[i].length > 4) results.push(employees[i]);
}

const results2 = [];
employees.forEach((employee) => {
  if (employee.length > 4) results2.push(employee);
});

// Declarativa QUÉ
const results3 = employees.filter((employee) => employee.length > 4);

// Usando for...of
const results4 = [];
for (const employee of employees) {
  if (employee.length > 4) {
    results4.push(employee);
  }
}

const developer = {
  name: 'Juan',
  city: 'Valencia',
  skills: ['JavaScript', 'Vue', 'CSS'],
};

developer[Symbol.iterator] = function () {
  let i = 0;
  return {
    next: () => ({
      value: this.skills[i++],
      done: i > this.skills.length,
    }),
  };
};

for (const skill of developer) {
  console.log(skill);
}

// for (const [key, value] of Object.entries(developer)){
//   console.log(key, value)
// }

// const string = "Esto es una string"
// for(const char of string){
//   console.log(char)
// }
