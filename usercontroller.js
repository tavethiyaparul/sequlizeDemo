const { sequelize, Sequelize } = require('../model/index')
var db = require('../model/index')
const Users = db.users

var addUser = async (req, res) => {
    try {

        let data = await db.users.create({ name: "parul", email: "abc@gmail.com", gender: 'male' })

        //update
        // data.name="rishiv"
        // data.save()

        //delete
        // data.destroy()

        // let data = await Users.create({name:'demo',email:'demo@gmail.com'})
        // console.log(data.dataValue);

        let response = {
            data: data
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}

const crudOpration = async(req,res) =>{
    // let data = await db.users.create({ name: "parul", email: "abc@gmail.com", gender: 'male' })

    //update
    // let data = await Users.update({name:"final",email:"final@gmail.com"},{
    //     where:{
    //         id:2
    //     }
    // })

    //delete
    // let data = await Users.destroy({
    //     where:{
    //         id:3
    //     }
    // })

    //insert many
    // let data = await Users.bulkCreate([
    //     {name:"ram",email:"ram@gmail.com",gender:"male"},
    //     {name:"ram",email:"ram@gmail.com",gender:"male"},
    //     {name:"ram",email:"ram@gmail.com",gender:"male"}

    // ])

    //find all findone
    // let data =await Users.findAll({})

    //select
    let data = await Users.findAll({
        attributes:[
            'name',
            'email'
        ]
    })

    let response = {
        data: data
    }
    res.status(200).json(response)
}

module.exports = {
    addUser,
    crudOpration
}