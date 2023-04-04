import { usernameExists, userIdExists } from '../models/userModel';

async function checkUsername(req, res, next) {
  const { username } = req.body;

  // Kolla här också om username överhuvudtaget skickats med i body innan vi söker i databasen?

  const exists = await usernameExists(username);

  if (exists) {
    res.json({ success: false, message: 'Username already exists' });
  } else {
    next();
  }
}

async function checkUserId(req, res, next) {
  const { userId } = req.body;

  const exists = await userIdExists(userId);

  if (exists) {
    next();
  } else {
    res.status(401).json({ success: false, error: 'Unauthorized access' });
  }
}

export { checkUsername, checkUserId };
