const{ Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize ('student','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idel:10000}
    // logging:false terminal display select query
})

sequelize.authenticate()
.then(()=>{
    console.log("connect database");
})
.catch(err =>{
    console.log("not connect",err);
})

const db = {}
db.Sequelize=Sequelize;
db.sequelize=sequelize
db.users = require('./users')(sequelize,DataTypes)
db.emp = require('./empmodel')(sequelize,DataTypes)
db.posts = require('./posts')(sequelize,DataTypes)
db.posts = require('./tags')(sequelize,DataTypes)
db.emp = require('./post_tag')(sequelize,DataTypes)

//force: true - create new database at a time other wise if table exists not table drop
db.sequelize.sync({})
.then(()=>{
    console.log("yes re sync");
})

module.exports=db