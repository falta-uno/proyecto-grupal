const { Player } = require("../../db.js");

async function getPlayers(req, res, next) {
  try {
    // let countries = await Country.findAll({
    //   include: Activity,
    //   order: [["id", "ASC"]],
    // });

    res.json({ msg: 'desde get player' });

  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getPlayers,
};
