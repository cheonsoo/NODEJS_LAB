class Test {
  id: string
  name: string
  email: string

  contructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId() {
    return this.id;
  }
}
