import express from 'express';
// import path from 'path';
import { getAllUsers, putUser, postUser, deleteUser, getUser } from './users/users.memory';

const app = express();
const PORT = 8080;
// const createPath = (page) => path.resolve();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(getAllUsers())
});

app.get('/:id', (req, res) => {
  const user = getUser(req.params.id);
  if (user === undefined){
    res.status(404).json({message: `User with id: ${req.params.id} not found.`})
  } else {
    res.status(200).json(user)
  }
});

app.put('/', (req, res) => {
  const newUser = putUser(JSON.parse(req.body));
  if (newUser === undefined){
//TODO error massage with wrong field 
    res.status(400).json({message:`Incorrect data`})
  }else {
    res.status(201).json(newUser)
  }
});

app.post('/', (req, res) =>{
  console.log(req.body);
  const updateUser = postUser(req.body);
  if (updateUser === undefined){
//TODO error massage with wrong field 
    res.status(400).json({message:`Incorrect data`})
  }else {
    res.status(201).json(updateUser)
  }
})
  

app.delete('/:id', (req,res) => {
  res.send(deleteUser(req.params.id))
})

app.use((req, res) => {
  res.status(404);
  res.send();
})
module.exports = {app, PORT};