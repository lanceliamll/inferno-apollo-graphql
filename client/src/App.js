// import {  Component } from 'inferno';
import { graphql } from "inferno-apollo";
import gql from "graphql-tag";
import { branch, compose, renderComponent } from "incompose";
import Error from "./branch/Error";
import Loading from "./branch/Loading";


const App = (props) => (
  <div>
    <h1>Todos</h1>
    <div>
      {
        props.data.getAllTodos &&
        props.data.getAllTodos.map(todo => (
          <div>{todo.todoName}</div>
        ))
      }
    </div>
  </div>
)

//Query
const query = gql`
query {
  getAllTodos {
    todoName
  }
}
`


export default compose(graphql(query),

  //Error ? Branch Error 
  branch(
    (props) => !props.data || props.data.error,
    renderComponent(Error)
  ),

  //Loading ? Branch Loading
  branch(
    (props) => !props.data || props.data.loading,
    renderComponent(Loading)
  )

)(App);
