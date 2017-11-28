// let users = [];

function User(user) {
  this.name = user.name;
  this.password = user.password;
  // this.save = function save(callback) {
  //   var user = {
  //     name: this.name,
  //     password: this.password,
  //   };
  //   users.forEach(item => {
  //     if (item.name == user.name) {
  //       callback("用户已存在")
  //     } else {
  //       users.push(user)
  //     }
  //   })
  // };
  // this.get = function get(username, callback) {
  //   users.forEach(item => {
  //     if (item.name == username) {
  //       callback(0, "用户已存在")
  //     }
  //   })
  // };
};
module.exports = User;
User.prototype.save = function save(callback) {
	let users = []||users;
  var user = {
    name: this.name,
    password: this.password,
  };
  users.forEach(item => {
    if (item.name == user.name) {
      callback("用户已存在")
    } else {
      users.push(user)
    }
  })
};

User.get = function get(username, callback) {
  users.forEach(item => {
    if (item.name == username) {
      callback(0, "用户已存在")
    }
  })
};