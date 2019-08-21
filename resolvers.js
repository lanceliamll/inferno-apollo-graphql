const Todo = require("./models/Todo");
resolvers = {


  Query: {
    //Get all TODOS
    getAllTodos: async (parent, args, context, info) => {
      const todos = await Todo.find();
      return todos;
    }
  },

  Mutation: {
    //Add TODO
    addTodo: async (parent, { todoName }, context, info) => {

      //Create new TODO
      const newTodo = await new Todo({
        todoName
      }).save();

      return newTodo;

    }
  }

}

module.exports = resolvers;