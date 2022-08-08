const { Sponsors,Products} = require("../../db");


async function getAllSponsors(req, res, next) {
  try {
    const sponsors = await Sponsors.getAll()
    res.status(200).json(sponsors);
  } catch (e) {
    res.status(400).json({ msg: "Fallo la obtencion de los sponsors" });
  }
}

async function createSponsor(req, res, next) {
  const {
    name,
    logo,
    link,
    cuit,
    address
  } = req.body;
  try {
    const newSponsor = await Sponsors.create({
        name,
        logo,
        link,
        cuit,
        address
    });
    console.log('creado correctamente')
    res.status(200).json(newSponsor);
  } catch (e) {
    console.log("fallo la creacion del sponsor", e);
    res.status(400).json({ msg: "fallo la creacion del sponsor" });
  }
}
async function createProduct(req, res, next) {
  const {
    name,
    link,
    image,
    description,
    sport,
    sponsorId,
  } = req.body;
  try {
    const newProduct = await Products.create({
      name,
      link,
      image,
      description,
      sport,
      sponsorId,
    });
    console.log('creado correctamente')
    res.status(200).json(newProduct);
  } catch (e) {
    res.status(400).json({ msg: "fallo la creacion del producto", e });
  }
}





module.exports = {
  createSponsor,
  getAllSponsors,
  createProduct,
};