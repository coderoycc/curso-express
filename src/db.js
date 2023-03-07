const mysql = require('mysql2')

async function connectDB(){
  const conn = await mysql.createConnection({
    host:'us-east.connect.psdb.cloud',
    user:'ueyc0as3p44u5q7q57ru',
    password:'pscale_pw_qTHEkv2nxBDCPsuL7rRpwPRss6fg5W2qOWHWJoaQ4iG',
    database:'betto',
    ssl: {
      rejectUnauthorized: false
    }
  })
  const res = conn.query('SELECT 1 + 1 AS Result')
  console.log(res)
}

module.exports = connectDB