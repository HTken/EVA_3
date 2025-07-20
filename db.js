// db.js
const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ticllasuca_04', // <- reemplaza con tu contraseña real
  database: 'productos_db',
  port: 3306
});


conexion.connect((err) => {
  if (err) throw err;
  console.log('✅ Conectado a MySQL');
});

module.exports = conexion;
