const mysql = require('mysql2')
require('dotenv').config() 
async function connectDB(){
  const conn = await mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:'betto',
    ssl: {
      rejectUnauthorized: false
    }
  })
  const res = conn.query('SELECT 1 + 1 AS Result')
  console.log(res)
}
module.exports = connectDB