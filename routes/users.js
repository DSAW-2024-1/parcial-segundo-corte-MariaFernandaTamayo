const express = require("express");
const router = express.Router();

const users = [
  { nombre: "Samuel", apellido: "Acero", correo: "samuelacga@unisabana.edu.co" },
  { nombre: "Darek", apellido: "Aljuri", correo: "darekalma@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Cepeda", correo: "juanceur@unisabana.edu.co" },
  { nombre: "Ana", apellido: "Chaves", correo: "anachpe@unisabana.edu.co" },
  { nombre: "Carlos", apellido: "Cruz", correo: "carloscrpa@unisabana.edu.co" },
  { nombre: "Diego", apellido: "Diaz", correo: "diegodial@unisabana.edu.co" },
  { nombre: "Jorge", apellido: "Diaz", correo: "jorgedibe@unisabana.edu.co" },
  { nombre: "David", apellido: "Diaz", correo: "daviddiava@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Forero", correo: "juanfope@unisabana.edu.co" },
  { nombre: "Santiago", apellido: "Gutierrez", correo: "santiagoguba@unisabana.edu.co" },
  { nombre: "Samuel", apellido: "Lopez", correo: "samuellohu@unisabana.edu.co" },
  { nombre: "Michael", apellido: "Medina", correo: "michaelmefe@unisabana.edu.co" },
  { nombre: "Katherin", apellido: "Moreno", correo: "katherinmorca@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Moreno", correo: "juanmorpat@unisabana.edu.co" },
  { nombre: "Nicolas", apellido: "Muñoz", correo: "nicolasmuse@unisabana.edu.co" },
  { nombre: "Santiago", apellido: "Navarro", correo: "santiagonacu@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Parrado", correo: "juanparmor@unisabana.edu.co" },
  { nombre: "Daniel", apellido: "Ramirez", correo: "danielrach@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Restrepo", correo: "juanresco@unisabana.edu.co" },
  { nombre: "Gabriela", apellido: "Reyes", correo: "gabrielarego@unisabana.edu.co" },
  { nombre: "Juan", apellido: "Rodriguez", correo: "juanrodfa@unisabana.edu.co" },
  { nombre: "Valentina", apellido: "Ruiz", correo: "valentinaruito@unisabana.edu.co" },
  { nombre: "Mariana", apellido: "Salas", correo: "marianasalgu@unisabana.edu.co" },
  { nombre: "Sebastian", apellido: "Sanchez", correo: "sebastiansasa@unisabana.edu.co" },
  { nombre: "Josue", apellido: "Sarmiento", correo: "josuesagu@unisabana.edu.co" },
  { nombre: "Santiago", apellido: "Soler", correo: "santiagosopr@unisabana.edu.co" },
  { nombre: "Maria", apellido: "Tamayo", correo: "mariatalo@unisabana.edu.co" },
  { nombre: "Deivid", apellido: "Urrea", correo: "deividurla@unisabana.edu.co" },
  { nombre: "Andres", apellido: "Azcona", correo: "andresazgo@unisabana.edu.co" }
];

router.get('/:count', (req, res) => {
    const count = parseInt(req.params.count, 10) || 10;
    let sortOrder = (req.query.sort || 'ASC').toUpperCase();

    if (!['ASC', 'DESC'].includes(sortOrder)) {
        return res.status(400).send('Parámetro de inválido. Utilice "ASC" para ascendente o "DESC" para descendente.');
    }

    let sortedUsers = [...users]; 
    sortedUsers.sort((a, b) => {
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();

        if (sortOrder === 'ASC') {
            return apellidoA.localeCompare(apellidoB);
        } else {
            return apellidoB.localeCompare(apellidoA);
        }
    });

    let startIndex = sortOrder === 'ASC' ? 0 : Math.max(sortedUsers.length - count, 0);
    let endIndex = Math.min(startIndex + count, sortedUsers.length);

    let limitedUsers = sortedUsers.slice(startIndex, endIndex);

    let output = 'Lista de usuarios:\n\n';
    limitedUsers.forEach(user => {
        output += `${user.nombre} ${user.apellido}\n`;
    });

    res.type('text').send(output);
});

router.post('/', (req, res) => {
    const { nombre, apellido, correo, ciudad = 'Bogotá', pais = 'Colombia' } = req.body;

    const user = {
        nombre,
        apellido,
        correo,
        ciudad,
        pais
    };
    res.status(200).json(user);
    console.log(user)
});  

module.exports = router;