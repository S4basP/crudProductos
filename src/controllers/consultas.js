import { conn } from "../dbConexion.js";

export const consultarDatos = async (req, res) => {
  try {
    const [rows] = await conn.query("select * from productos;");
    res.json(rows);
  } catch {
    return res.status(500).json({ message: "Someting goes wrong" });
  }
};

export const subirDatos = async (req, res) => {
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

export const actualizarProducto = ( req, res ) =>
{
  
}


export const eliminarProducto = async (req, res) => {
  const { id } = req.body;
  try {

    const [rows] = await conn.query("delte from product where id = ?", [id]);
    if (result.affectedRows <= 0)
      return res.status(404).joson({ message: "Employee not found" });
    res.sendStatus(204);

  } catch {

    return res.status(500).json({
      message: "Somethin goes wrong",
    });
  }
};
