const db = require("./database");


exports.createPost = async function(data) {
    const sql = "INSERT INTO `post` (`refs`, `content`, `date_creation`) VALUES (?, ?, ?, ?)";
    const createPost = [
      data.refs,
      data.content,
      data.date_creation
    ];
    
    const answer = await db.request(sql, createPost);
    console.log(answer);
    return answer;
  }
  

 