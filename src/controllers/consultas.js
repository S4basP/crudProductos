import { conn } from '../dbConexion.js';


 export const verDatos = async ( req, res) =>
{
    const [rows] = await conn.query('select * from productos;');

    res.json(rows);

};


