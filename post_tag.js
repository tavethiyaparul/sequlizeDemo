module.exports = (sequelize,DataTypes) =>{
    const Post_Tag = sequelize.define('post_tag',{
        post_id:DataTypes.INTEGER,
        tag_id:DataTypes.INTEGER,
    },{timestamps:false})
    return Post_Tag
}
