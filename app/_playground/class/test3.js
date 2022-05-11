class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  // id = "";
  // name = "";

  get getId() {
    return this.id;
  }
  set setId(id) {
    this.id = id;
  }
}

const user = new User("id1", "name1");
console.log(user);
user.setId("id22342342");
console.log(user.getId());