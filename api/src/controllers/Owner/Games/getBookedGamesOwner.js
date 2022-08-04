const { Games, Complex, Field } = require("../../../db.js");

async function getBookedGamesByOwner (req, res){
    const {id} = req.params;
      try {
        const getComplex = await Complex.findAll({
            where:{ownerId:id}, 
            include: [{model:Field}]
        })
        const bookedGames = await Games.findAll({
          where:{fieldId : getComplex.field.id}
        });
        res.status(200).json(bookedGames);
      } catch (e) {
        console.log(e);
        res.status(400).json({ msg: "no hay reservas" });
      }
}

module.exports = {
    getBookedGamesByOwner,
  };