import { usernameExists, userIdExists } from '../models/userModel.js';

async function checkUsername(req, res, next) {
  const { body } = req;

  if ('username' in body) {
    const exists = await usernameExists(body.username);
    if (exists) {
      res.json({ success: false, message: 'Username already exists' });
    } else {
      next();
    }
  } else {
    res.json({ success: false, message: 'Username missing in body' });
  }
}

async function checkLogin(req, res, next) {
  const { body } = req;

  if ('username' in body && 'password' in body) {
    next();
  } else {
    res.json({ success: false, message: 'Username or password missing in body' });
  }
}

async function checkUserId(req, res, next) {
  const { userId } = req.body;

  if (!userId) {
    return next();
  }

  const exists = await userIdExists(userId);

  if (exists) {
    res.locals.isAuthorized = true;
  } else {
    return res.status(401).json({ success: false, error: 'Unauthorized access' });
  }

  return next();
}

export { checkUsername, checkUserId, checkLogin };
