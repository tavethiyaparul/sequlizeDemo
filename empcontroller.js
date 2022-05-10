const { sequelize, Sequelize } = require('../model/index')
var db = require('../model/index')
const Emp = db.emp

var postdata = async(req,res) =>{
    try {
        let { name, post, salary, gender } = req.body
        let data = await db.emp.create({
            name,
            post, 
            salary,
            gender
        })
        // await data.save()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

var getdata = async(req,res) =>{
    try {
        let data = await db.emp.findAll({})
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

var updatedata = async (req,res) =>{
    try {
        let data = await db.emp.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        console.log(data);
        res.send("updated data")
      
    } catch (error) {
        res.send(error)
    }
}

var deletedata = async(req,res) =>{
    try {
        let data = await db.emp.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send("delete data")
      
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    postdata,
    getdata,
    updatedata,
    deletedata

}