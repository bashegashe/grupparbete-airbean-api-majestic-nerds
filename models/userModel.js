import { nanoid } from 'nanoid';
import { usersDatabase, historyDatabase } from '../database/database.js';

async function usernameExists(username) {
  const usernames = await usersDatabase.findOne({ username });
  if (usernames) {
    return true;
  }
  return false;
}

async function createUser(username, password) {
  const userId = nanoid();
  await usersDatabase.insert({ username, password, userId });
  return userId;
}

async function userIdExists(userId) {
  return usersDatabase.findOne({ userId });
}

async function authenticateLogin(username, password) {
  const authUser = await usersDatabase.findOne({ $and: [{ username }, { password }] });

  if (authUser) {
    return { success: true, userId: authUser.userId };
  }

  return { success: false, message: 'Wrong username or password' };
}

async function getUserHistory(userId) {
  const orderHistory = await historyDatabase.find({ userId });

  const result = {
    success: true,
    orderHistory,
  };

  return result;
}

export {
  usernameExists, userIdExists, createUser, authenticateLogin, getUserHistory,
};
