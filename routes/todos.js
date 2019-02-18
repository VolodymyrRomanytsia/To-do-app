const express = require('express')
const passport = require('passport')
const controller = require('../controllers/todos')
const router = express.Router()

router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getTodos)
router.post('/:id', passport.authenticate('jwt', {session: false}), controller.createTodo)
router.post('/resolve/:id', passport.authenticate('jwt', {session: false}), controller.resolveTodo)
router.post('/delete/:id', passport.authenticate('jwt', {session: false}), controller.deleteTodo)
router.get('/maingoal/:id', passport.authenticate('jwt', {session: false}), controller.getMainGoal)
router.post('/maingoal/:id', passport.authenticate('jwt', {session: false}), controller.createMainGoal)


module.exports = router