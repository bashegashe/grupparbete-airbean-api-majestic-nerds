import { createUser } from '../../models/userModel.js';

const RegisterController = {
  async register(req, res) {
    const { username, password } = req.body;
    const id = await createUser(username, password);
    res.json({ success: true, id });
  },
};

export default RegisterController;
