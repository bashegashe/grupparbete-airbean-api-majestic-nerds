import { nanoid } from 'nanoid';
import { usersDatabase } from '../database/database.js';


async function usernameExists(username) {
  const usernames = await usersDatabase.findOne({ username });
  if (usernames) {
    return true;
  }
  return false;
}

async function createUser(username, password) {
  const id = nanoid()
  await usersDatabase.insert({ username, password, id });
  return id;
}

async function userIdExists(userId) {
  return usersDatabase.find({ userId });
}

export { usernameExists, userIdExists, createUser };
