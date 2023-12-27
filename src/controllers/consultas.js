import { conn } from "../dbConexion.js";

export const consultarProductos = async (req, res) => {
  try {
    const [rows] = await conn.query("select * from productos;");
    res.json(rows);
  } catch {
    return res.status(500).json({ message: "Someting goes wrong" });
  }
};

export const subirProducto = async (req, res) => {
  const { nombre, unidades, precio_Por_Unidad } = req.body;

  try {
    const [rows] = await conn.query(
      "insert into productos ( nombre, unidades, precio_Por_Unidad ) value ( ?, ?, ? );",
      [nombre, unidades, precio_Por_Unidad]
    );
    res.send([rows]);
  } catch {
    return res.status(500).json({ message: "Someting goes wrong" });
  }
};

export const actualizarProducto = async (req, res) => {
  const { id, nombre, unidades, precio_Por_Unidad } = req.body;

  try
  {
    const result = conn.query("update productos set nombre = ifnull( ?, nombre ), unidades = ifnull ( ?, unidades ), precio_Por_Unidad = ifnull( ? , precio_Por_Unidad) where id = ?;", [ nombre, unidades, precio_Por_Unidad, id ]);

    if( result.affectedRows === 0 ) return res.status(404).json({
      message: "Product not update "
    });

    res.sendStatus(204);
  }
  catch
  {
    res.status(505).json({message: "Somethin goes wrong"});
  }

};

export const eliminarProducto = async (req, res) => {
  const {id} = req.body;  
  try{
      const result = await conn.query('delete from productos where id = ?', [ id ]);
      if( result.affectedRows <= 0 ) return res.status(404).json({message: "cant delete product"})
      res.sendStatus(204);
  }catch{
    return res.status(404).json({message: "can´t conexion databases"});
  }
};
