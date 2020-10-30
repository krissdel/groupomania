const db = require("./database");






  

  
exports.role =  async function (id, name){
    const role = "SELECT id FROM 'role' WHERE 'name' = admin 'password' = ?";
    const role = await db.request(sql, [id, name]);
    return role;
  };