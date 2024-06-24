const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno desde un archivo .env

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Permitir el puerto de Vite
  methods: 'POST',
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

app.post('/send-email', (req, res) => {
  const { name, lastName, email, message } = req.body;

  console.log(`Received email from ${name} ${lastName}`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Usar la contraseña de aplicación desde variables de entorno
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Mensaje de ${name} ${lastName}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: error.toString() });
    }
    console.log('Correo enviado:', info.response);
    res.status(200).json({ message: 'Correo enviado', response: info.response });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
