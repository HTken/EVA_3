// index.js
const express = require('express');
const app = express();
const conexion = require('./db');

app.use(express.json());

app.post('/productos', (req, res) => {
  const { codigo, nombre } = req.body;

  // Validar si el código ya existe
  conexion.query('SELECT * FROM productos WHERE codigo = ?', [codigo], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length > 0) {
      return res.status(400).json({ mensaje: 'Producto con este código ya existe' });
    }

    // Insertar nuevo producto
    conexion.query(
      'INSERT INTO productos (codigo, nombre) VALUES (?, ?)',
      [codigo, nombre],
      (err) => {
        if (err) return res.status(500).send(err);

        res.json({ mensaje: 'Producto creado correctamente' });
      }
    );
  });
});

app.listen(3000, () => console.log('🚀 Servidor corriendo en http://localhost:3000'));
