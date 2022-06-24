import { Op } from "sequelize"

const GET = async (req, res) => {
    const users = await req.models.User.findAll({
        attributes: ['user_id', 'username'],
    })
    res.send(users)
}

const POST = async (req, res) => {
    const user = await req.models.User.create({
        username: req.body.username,
        gender: req.body.gender,
        age: req.body.age,
    })

    return res.status(200).send(user)
}

const UPDATE = async (req, res) => {
    const user = await req.models.User.update(
        req.body,
        {
            where: {
                user_id: {
                    [Op.eq]: req.params.userId
                },
            }
        }
    )

    return res.status(200).send(user)
}

const DELETE = async (req, res) => {
    const deletedUser = await req.models.User.findOne({ 
        where: {
            user_id: {
                [Op.eq]: req.params.userId
            },
        },
    })

    const user = await req.models.User.destroy(
        {
            where: {
                user_id: {
                    [Op.eq]: req.params.userId
                },
            },
        }
    )
    return res.status(200).send(deletedUser)
}

export default {
    DELETE,
    UPDATE,
    POST,
    GET
}