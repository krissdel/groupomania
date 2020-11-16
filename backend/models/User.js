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
  // if (answer.data.id < 0) return false;
  return answer;
  
};


exports.login =  async function (email){
  const sql = "SELECT id, password FROM `user` WHERE `email` = ? ";
  const answer = await db.request(sql, [email]);
  console.log("qfffffffffffflogin:",answer);
  return answer;
};



exports.logout =  async function (email){

  const sql = "SELECT id, FROM `user` WHERE `id` = connected ";
  const answer = await db.request(sql, [email]);
  console.log("!!!!!!!!!logout:",answer);
  return answer;
};



exports.delete =  async function (email){
  // console.log('yyyyyyyyyyyyyyyy', delete)

  const sql = "DELETE FROM `user`(`first_name`, `last_name`, `email`, `password`) VALUES (?, ?, ?, ?)";

  const answer = await db.request(sql, [email]);
  console.log("!!!!!!!!!delete:",answer);
  return answer;
};

// exports.getAllPosts =  async function(data){
//   const sql = "SELECT * from post ";
//   const getAllPosts = 
//   [
//     data
//   ];
//   const answer = await db.request(sql, getAllPosts);
//   console.log("getAllPosts", answer);
//       console.log('voiçi tous les posts');

//   return answer;
// }

