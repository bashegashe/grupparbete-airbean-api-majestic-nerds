import { createUser } from '../../models/userModel.js';

const RegisterController = {
  async register(req, res) {
    const { username, password } = req.body;
    const userId = await createUser(username, password);
    res.json({ success: true, userId });
  },
};

export default RegisterController;
