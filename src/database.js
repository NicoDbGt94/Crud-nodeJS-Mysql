import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "personas",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;