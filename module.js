const Person = class {
  constructor(_name, _age) {
    this.name = _name,
    this.age = _age
  }

  get getName() {
    return this.name
  }

  get getAge() {
    return this.age
  }

  set setName(newName) {
    this.name = newName;
  }

  set setAge(newAge) {
    this.age = newAge
  }
}

const add = function(a,b){
  return a + b;
}

const subtract = (a,b) => {
  return a - b;
}

// export {
//   subtract as default,
//   Person as PersonClass,
//   add as cong,
// };

export default subtract
export {Person, add}

// export {Person, add};
// module.exports =  {
//   Person: Person,
//   add: add
// };
