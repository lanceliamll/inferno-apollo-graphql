import { Component, linkEvent } from 'inferno';
import { graphql } from "inferno-apollo";
import gql from "graphql-tag";
import { branch, compose, renderComponent, withState } from "incompose";
import Error from "./branch/Error";
import Loading from "./branch/Loading";
import { ListGroup, ListGroupItem } from "inferno-bootstrap"

//Handle Inputs
const handleChangeTodo = (props) => {
  props.setTodo({ [props.target.name]: props.target.value })
}

const addTodo = (props) => {
  console.log(props.todo)
}

const App = (props) => (
  <div>
    <h1>Todos</h1>
    <div>
      <h1>Add Todo</h1>
      <input type="text" name="todo" value={props.todo} onInput={handleChangeTodo} />
      <button onClick={linkEvent(props, addTodo)}>Add</button>
    </div>
    <div>
      {
        props.data.getAllTodos &&
        props.data.getAllTodos.map(todo => (
          <ListGroup>
            <ListGroupItem>{todo.todoName}</ListGroupItem>
          </ListGroup>
        ))
      }
    </div>
  </div>
)

// const App = (props) => (

// )

//Query
const query = gql`
query {
  getAllTodos {
    todoName
  }
}
`
// A  thing like useState 
const withTodoState = withState('todo', 'setTodo', "");


export default compose(graphql(query),

  //State
  withTodoState,

  //Loading ? Branch Loading
  branch(
    (props) => !props.data || props.data.loading,
    renderComponent(Loading)
  ),

  //Error ? Branch Error 
  branch(
    (props) => !props.data || props.data.error,
    renderComponent(Error)
  )

)(App);
