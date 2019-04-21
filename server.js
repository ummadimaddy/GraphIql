const express=require('express');
const expressGraphQL=require('express-graphql')
const schema=require('./schema');

const app=express();
app.use('/graphql',expressGraphQL({
    schema:schema,
    graphiql:true
}));
app.listen(4100,()=>{
    console.log('server is running on port 4100')
}); 