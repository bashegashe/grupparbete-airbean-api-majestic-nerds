import { usersDatabase } from '../database/database';

async function usernameExists(username) {
  return usersDatabase.find({ username });
}

async function userIdExists(userId) {
  return usersDatabase.find({ userId });
}

export { usernameExists, userIdExists };
