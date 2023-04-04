const RegisterController = {
  async register(req, res) {
    const { username, password } = req.body;

    res.json({ success: true, username, password });
  },
};

export default RegisterController;
