import  express from 'express';
import { v4 as uuidv4 } from 'uuid';

var router =  express.Router();

var nsp_data = [];
// Create a new APi
router.get('/', (req,res)=>{
    // console.log(nsp_data);
    res.send(nsp_data);
});
//posting data to the API database
router.post('/', (req,res)=>{
    //console.log("post reached");

    var user = req.body;
    nsp_data.push({...user, id: uuidv4()}); 
    res.send('user was added');
});
//getting a specific user from the API database
router.get('/:id', (req,res)=>{
    var {id} = req.params;
    var foundUser = nsp_data.find((user) => user.id === id);
    res.send(foundUser ); 
}); 

export default router;  