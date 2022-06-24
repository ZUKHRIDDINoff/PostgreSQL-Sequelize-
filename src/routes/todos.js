import { Router } from 'express'
import CT from '../controllers/todos.js'

const router = Router()

router.get('/todos',CT.GET_TODOS)
router.post('/todos',CT.POST_TODO)
router.delete('/todos/:todoId',CT.DELETE_TODO)
router.put('/todos/:todoId', CT.UPDATE_TODO)



export default router