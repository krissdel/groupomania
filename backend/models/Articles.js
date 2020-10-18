const db = require("./database");


exports.createArticles = async function(data) {
    const sql = "INSERT INTO `articles` (`refs`, `slugs`, `content`, `date_creation`) VALUES (?, ?, ?, ?)";
    const createArticles = [
      data.refs,
      data.slugs,
      data.content,
      data.date_creation
    ];
    
    const answer = await db.request(sql, createArticles);
    console.log(answer);
    return answer;
  }
  

 