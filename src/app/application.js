const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar la carpeta public para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para renderizar la plantilla index.ejs
app.get('/src/app/components', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
