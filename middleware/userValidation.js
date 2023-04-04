import { usernameExists, userIdExists } from '../models/userModel.js';

async function checkUsername(req, res, next) {
  const { body } = req;

  if ('username' in body) {
    const exists = await usernameExists(body.username);
    console.log(exists);
    if (exists) {
      res.json({ success: false, message: 'Username already exists' });
    } else {
      next();
    }
  } else {
    res.json({ success: false, message: 'Username missing in body' });
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
