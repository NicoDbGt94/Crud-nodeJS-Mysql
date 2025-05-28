import { createPool } from "mysql/promise";

const pool = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "crud_node_mysql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;