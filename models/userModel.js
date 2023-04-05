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
  const id = nanoid();
  await usersDatabase.insert({ username, password, id });
  return id;
}

async function userIdExists(userId) {
  return usersDatabase.findOne({ id: userId });
}

async function authenticateLogin(username, password) {
  const authUser = await usersDatabase.findOne({ $and: [{ username }, { password }] });

  if (authUser) {
    return { success: true, id: authUser.id };
  }

  return { success: false, message: 'Wrong username or password' };
}

export {
  usernameExists, userIdExists, createUser, authenticateLogin,
};
