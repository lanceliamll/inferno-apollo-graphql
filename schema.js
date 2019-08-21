const { gql } = require("apollo-server-express");
const Todo = require("./models/Todo")

typeDefs = gql`

type Query {
  getAllTodos: [Todo]
}

type Mutation {
  addTodo(todoName: String!): Todo
}

type Todo {
  _id: ID
  todoName: String!
  completedTodo: Boolean
}



`


module.exports = typeDefs;