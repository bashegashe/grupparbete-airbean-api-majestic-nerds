import { nanoid } from 'nanoid';
import { usersDatabase } from '../database/database.js';

async function usernameExists(username) {
  const usernames = await usersDatabase.find({ username });
  if (usernames.length > 0) {
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
  return usersDatabase.find({ userId });
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
