import { conn } from "../dbConexion.js";

export const consultarDatos = async (req, res) => {
  try {
    const [rows] = await conn.query("select * from productos;");
    res.json(rows);
  } catch {
    return res.status(500).json({ message: "Someting goes wrong"});
  }

};

export const subirDatos =  async ( req, res ) =>
{
  console.log(req.body)
  res.send("New post");
  // const {nombre, unidades, precio_Por_Unidad} = req.body;
  // try
  // {
   
  //   const [ rows ] = await conn.query("insert into productos ( nombre, unidades, precio_Por_Unidad ) value ( ?, ?, ? );", [ nombre, unidades, precio_Por_Unidad ]);
  //   res.send( { rows } );
  // }
  // catch
  // {
  //   return res.status(500).json({ message: "someting goes wrong"});
  // }
};