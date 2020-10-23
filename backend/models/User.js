const db = require("./database");

exports.signup = async function(data) {
  const sql = "INSERT INTO `user` (`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?)";
  const reformatedData = [
    data.firstName,
    data.lastName,
    data.email,
    data.password
  ];
  
  const answer = await db.request(sql, reformatedData);
  console.log(answer);
  return answer;
};

exports.alreadyExist = async function (email){
  const sql = "SELECT id FROM `user` WHERE `email` = ?";
  const answer = await db.request(sql, [email]);
  return answer;
};



exports.login =  async function (email, password){
  const sql = "SELECT id FROM 'user' WHERE 'email' = ? 'password' = ?";
  const login = await db.request(sql, [email, password]);
  return login;
};

