module.exports = (sequelize,DataTypes) =>{
    const Emp = sequelize.define('empmodel',{
        name:DataTypes.STRING,
        post:DataTypes.STRING,
        salary:DataTypes.INTEGER,
        gender:DataTypes.STRING
    });
    return Emp
}