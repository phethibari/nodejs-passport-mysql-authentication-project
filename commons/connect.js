const mysql = require('mysql')
const dbConfig = require('./config').db

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "com4_2"
});



module.exports = {
    // @params query = sql query
    // @params params = [array params]
    // @params callback = callback function
    query: (query, params, callback) => {
        return conn.query(query, params, callback)    
    }
}