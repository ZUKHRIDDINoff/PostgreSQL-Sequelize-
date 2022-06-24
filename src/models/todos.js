import { DataTypes } from "sequelize";

export default ({ sequelize }) => {
    sequelize.define('Todo',{
        todo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        todo_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlpha: true
            }
        },
        todo_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    },{
        tableName: 'todos', 
        timestamps: false
    })
    
    // await sequelize.models.Todo.belongsTo(sequelize.models.User, {
    //     foreignKey: 'user_id'
    // })
}