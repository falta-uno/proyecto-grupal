
// onst { Teams, Player } = require("../../db.js");
// const { Op } = require("sequelize");

// async function createTeam(req, res, next) {
//   const { name, image, sport, playerEmail, amountPlayers } = req.body;
//   console.log(req.body)
//   console.log("soy el email",playerEmail)
//   try {
//     // const newTeam = await Teams.create({
//     //   name,
//     //   image,
//     //   sport,
//     //   amountPlayers,
//     // });
//     const player = await Player.findOne({
//       where: {
//         email: {
//           [Op.eq]: playerEmail,
//         },
//       },
//     });
//     await newTeam.addPlayer(player);

//     //FALTA LA RUTA DE CREACION DEL USUARIO/COMPLEJO para linkear a un complejo

//     // busco el complejo que crea la cancha
//     // const complexField = await Complex.findOne({
//     //   where: { id: complexId },
//     // });
//     // newField.addField(complexField); // asocio la cancha con el complejo
//     res.status(200).json(player);
//   } catch (e) {
//     console.log("fallo la creacion de la cancha", e);
//     res.status(400).json(e);
//   }
// }

// module.exports = {
//   createTeam,
// };

// async function ()