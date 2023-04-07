import { authenticateLogin } from '../../models/userModel.js';

const LoginController = {
  async login(req, res) {
    const { username, password } = req.body;

    const result = await authenticateLogin(username, password);

    res.json(result);
  },
};

export default LoginController;
