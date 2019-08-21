import gql from "graphql-tag";

export const GET_TODOS = gql`
  query {
    getTodos {
      todoName
    }
  }
`