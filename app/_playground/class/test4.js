function User(id, name) {
  this.id = id;
  this.name = name;
}
User.prototype.getId = function() {
  return this.id;
}
User.prototype.setId = function(id) {
  this.id = id;
}
User.prototype.getName = function() {
  return this.name;
}
User.prototype.setName = function(name) {
  this.name = name;
}

const user = new User("id1", "name1");
console.log(user);
user.setId("id22222");
console.log(user.getId());
user.setName("name22222");
console.log(user.getName());