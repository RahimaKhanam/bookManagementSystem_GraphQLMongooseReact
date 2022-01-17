const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
 
const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(
    "mongodb+srv://rahima:rahima@cluster0.aocxo.mongodb.net/graphql-project")

mongoose.connection.once("open", ()=>{
    console.log("Connected to the database");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(8000, ()=>{
    console.log("Listening to port 8000");
}); 
