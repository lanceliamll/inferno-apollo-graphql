const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/Todo")
const bodyParser = require("body-parser");


//Apollo Config
const { ApolloServer, gql } = require("apollo-server-express");
const typDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
})

//Connect to DB
mongoose
  .connect("mongodb+srv://admin:admin1@cluster0-l56yz.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log("Connected on MongoDB"))
  .catch(err => console.log(err))


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;

//Apply the middleware on the express to run the graphql on 5000/graphql
server.applyMiddleware({ app })

app.listen(PORT, () => console.log(`Server Listening on ${PORT}`));