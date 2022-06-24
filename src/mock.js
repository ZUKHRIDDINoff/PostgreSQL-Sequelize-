export default async ({
    sequelize
}) => {
    await sequelize.models.Todo.bulkCreate([{
                todo_id: 1,
                user_id: 1,
                todo_name: 'make habit',
                todo_text: 'Everyday you should run 10 kilometr'
            },
            {
                todo_id: 2,
                user_id: 2,
                todo_name: 'feel relax',
                todo_text: 'I watch TV every morning'
            },
            {
                todo_id: 3,
                user_id: 3,
                todo_name: 'play football',
                todo_text: 'Should prepare to be powerful football man'
            }
        ]),
        await sequelize.models.User.bulkCreate([{
                username: 'ali',
                gender: 'male',
                age: 150
            },
            {
                username: 'nosir',
                gender: 'male',
                age: 25
            },
            {
                username: 'halil',
                gender: 'male',
                age: 15
            },
            {
                username: 'nigina',
                gender: 'female',
                age: 19
            },
        ])
}