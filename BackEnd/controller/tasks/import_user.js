const { addUser } = require("../service/auth");

const user = {
  name: "Ludmila",
  email: "ludmila@gmail.com",
  password: "password",
};

addUser(user);
