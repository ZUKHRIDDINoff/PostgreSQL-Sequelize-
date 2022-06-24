import { Op } from 'sequelize'


const GET_TODOS = async(req, res) => {
    const todos = await req.models.Todo.findAll()
    res.send(todos)
}

const POST_TODO = async(req, res) => {
    const user = await req.models.Todo.create({
        user_id: req.body.user_id,
        todo_name: req.body.todo_name,
        todo_text: req.body.todo_text
    })

    return res.status(200).send(user)
}

const UPDATE_TODO = async(req, res) => {
    const user = await req.models.Todo.update(
        req.body,
        {
            where: {
                todo_id: req.params.todoId
            }
        }
    )
    console.log(user);
    return res.status(200).send(user)
}



const DELETE_TODO = async(req, res) => {
    const user = await req.models.Todo.findOne({
        where: {
            todo_id: req.params.todoId
        }
    })
    
    await req.models.Todo.destroy({
        where: {
            todo_id: req.params.todoId
        }
    })
    return res.status(200).send(user)
}

export default {
    GET_TODOS,
    POST_TODO,
    DELETE_TODO,
    UPDATE_TODO
}
