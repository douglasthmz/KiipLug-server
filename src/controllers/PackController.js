const Pack = require('../models/Pack');

module.exports = {
  async index(req, res){
    
    const packs = await Pack.find();
    return res.json(packs);
  },

  async store(req, res){
    const {packName, packType, packItem } = req.body;
    const pack = await Pack.create({
      packName,
      packType,
      packItem
    });

    return res.json(pack);
  },

  async update(req, res){

    const packReq = req.body;
    if(!packReq){
      return res.json({"erro":"use um valor válido para o item"});
    }
    const pack =await Pack.findById({_id:req.params.id});
    pack.packItem.push({
      packDate:packReq.packDate,
      packBtn:packReq.packBtn
    });
    pack.packItem.id(packReq._id).remove();
    pack.save();

    return res.json(pack);
  },

  async remove(req, res){
    await Pack.findByIdAndRemove(req.params.id);
    return res.send("Deleted.");
  }
}