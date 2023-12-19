import { createPool } from 'mysql2/promise';


export const conn = createPool({
  host: "localhost",
  user: "sabas",
  password: "P1n3D40394",
  port: 3306,
  database: "Tienda",
});

