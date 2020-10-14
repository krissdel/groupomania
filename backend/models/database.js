var bdd = null;





const pool = (require("mariadb")).createPool({
  host           : process.env.HOST,
  user           : process.env.USER,
  password       : process.env.PASSWORD,
  database       : process.env.DATABASE,
  connectionLimit: Number(process.env.CONNECTIONLIMIT)
});


async function connect(){
  try{
    if (bdd !== null) return;
    bdd = await pool.getConnection();
  }
  catch (err) {
    throw "database connection error : " + err;
  }
}

function disconnect(){
  if (bdd) bdd.end();
}

async function request(sql, data=null){
  try {
    // console.log("sql",sql, data);
    if (bdd === null) await connect();
    const answer = await bdd.query(sql,data);
    disconnect();
    // console.log("request answer:",answer); 
    return {
      "succeed" : true,
      "data"    : removeMeta(answer)
    };
  } catch (err) {
    console.warn("request error:", err);
    return {
      "succeed" : false,
      "data" : err
    };
  }
  finally {
    if (bdd) bdd.release(); //release to pool
  }
}

function removeMeta(data){
  delete(data["meta"]);
  return data;
}
exports.request = request;
// exports.disconnect = disconnect;