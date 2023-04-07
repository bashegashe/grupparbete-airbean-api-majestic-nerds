import { usernameExists, userIdExists } from '../models/userModel.js';

async function checkRegistration(req, res, next) {
  const { body } = req;

  if (!body?.username || !body?.password) {
    return res.json({ success: false, message: 'Username or password missing in body' });
  }

  const exists = await usernameExists(body.username);

  if (exists) {
    return res.json({ success: false, message: 'Username already exists' });
  }

  next();
}

async function checkLogin(req, res, next) {
  const { body } = req;

  if (!body?.username || !body?.password) {
    return res.json({ success: false, message: 'Username or password missing in body' });
  }

  next();
}

async function isAuthenticated(req, res, next) {
  const { userId } = req.body;

  if (userId && await userIdExists(userId)) {
    return next();
  }

  res.status(401).json({
    success: false,
    error: 'Unauthorized access',
  });
}

export {
  checkRegistration, checkLogin, isAuthenticated,
};
