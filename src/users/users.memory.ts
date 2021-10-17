import { v4 as uuidv4 } from 'uuid';
import User from './interface/user'

const USERS: User[] = [
  {
    id:"612925f9-0f12-40bb-90fc-2979352a48c0",
    login: "login",
    password: "password",
    age: 7,
    isDeleted: false
  },
  {
    id:"fafc6c5f-4f6a-4751-9c2e-55195c37d49d",
    login: "login",
    password: "password",
    age: 7,
    isDeleted: false
  }
];

export const getAllUsers  = (): string => JSON.stringify(USERS);

export const getUser = (id:string): User => USERS[findUserById(id)];

export const putUser = (user: User): User => {
  user.id = uuidv4();
  USERS.push(user);
  return user 
}

export const postUser = (obj: User): User => {
  const id = findUserById(obj.id)
  console.log(id);
  USERS[id] = obj;
  return USERS[id];
}

export const deleteUser = (id: string): User => { 
  USERS[findUserById(id)].isDeleted = true; 
  return USERS[findUserById(id)];
}

const findUserById = (id: string) => USERS.findIndex((el)=> el.id === id);
