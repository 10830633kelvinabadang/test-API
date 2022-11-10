import express from 'express';
import bodyParser  from 'body-parser';
var app = express();
var PORT = process.env.PORT || 3030;
import usersRoutes from './routes/user.js';
 
app.use(bodyParser.json()); 

app.use('/users',usersRoutes);

app.get('/', (req,res) =>{
    res.send("we are on homepage")
})

app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`));