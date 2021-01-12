class User {
  #id;
  #name;

  constructor({ id, name }) {
    // constructor(id, name) {
    this.#id = id;
    this.#name = name;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// 사용법:
// let user = new User(1, 'John');
let user = new User({ id: 1, name: 'John' });
console.log(user.getName());
user.setName('cpark');
console.log(user.getName());

user.name = 'chance';
console.log(user.getName()); // not chance

// user.sayHi();
// user.setName('cpark');
// console.log(user.id);
// console.log(user.getName());

// user.name = 'chance';
// console.log(user.name);
