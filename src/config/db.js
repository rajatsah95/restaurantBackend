const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool("mysql://root:syMQAdPCTjigbayuFYxmLaNpwrtxllET@shuttle.proxy.rlwy.net:46385/railway");

module.exports = pool;
