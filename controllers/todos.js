
const errorHandler = require('../utils/errorHandler')
const User = require('../models/User')

module.exports.getTodos = async function(req, res) {
  try {
    const user = await User.findById(req.params.id)
    const resp = {todos: user.todos, maingoal: user.maingoal }
    res.status(200).json(resp)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createTodo = async function(req, res) {
  const todo = await {text: req.body.text}
  const user = await User.findOneAndUpdate(
    {_id: req.params.id},
    {$push: {todos : todo}},
    {new: true}   
  )
  try{
      await user.save()
      res.status(201).json(user.todos[user.todos.length - 1])
  }catch(e){
      errorHandler(res, e)
  }
}

module.exports.deleteTodo = async function(req, res) {
  try{
    const { _id } = req.body
    await User.findOneAndUpdate(
      {_id: req.params.id},
      { $pull: { todos: { "_id": _id } } },
      { new: true }
    )
    res.status(200).json({'success':true})
  }catch(e){
      errorHandler(res, e)
  }
}

module.exports.resolveTodo = async function(req, res) {
  try{
    const { _id, resolved } = req.body
    const user = await User.findOneAndUpdate(
      {_id: req.params.id},
      { $set: { "todos.$[todo].resolved" : resolved} },
      { arrayFilters: [ { "todo._id": _id } ], new: true }
    )
    const todo = user.todos.find(todo => {
      return todo._id == _id;
    })
    res.status(201).json(todo)
  }catch(e){
      errorHandler(res, e)
  }
}

module.exports.getMainGoal = async function(req, res) {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user.maingoal)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.createMainGoal = async function(req, res) {
  const user = await User.findOneAndUpdate(
    {_id: req.params.id},
    {$set: {maingoal : req.body.text}},
    {new: true}   
  )
  try{
      await user.save()
      res.status(201).json(user.maingoal)
  }catch(e){
      errorHandler(res, e)
  }
}
