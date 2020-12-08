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
  console.log("signup:",answer);
  console.log('===================ààààààààà');

  return answer;
};

exports.alreadyExist = async function (email){
  const sql = "SELECT id, first_name, last_name, email, role FROM `user` WHERE `email` = ?";
  const answer = await db.request(sql, [email]);
  console.log("alreadyExist",answer);
  return answer;
  
};


exports.login =  async function (email){
  const sql = "SELECT id, password FROM `user` WHERE `email` = ? ";
  const answer = await db.request(sql, [email]);
  console.log("qfffffffffffflogin:",answer);
  return answer;
};



exports.delete =  async function (email){
  const sql = "DELETE FROM `user` WHERE `user`.`id` = ?";
  const answer = await db.request(sql, [email]);
  console.log("!!!!!!!!!delete:",answer);
  return answer;
};


