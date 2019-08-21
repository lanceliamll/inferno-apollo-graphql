const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema({
  todoName: {
    type: String,
  },
  completedTodo: {
    type: Boolean,
    default: false
  }
})

module.exports = Todo = mongoose.model("todo", TodoSchema);