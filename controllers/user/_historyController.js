import { getUserHistory } from '../../models/userModel.js';

const HistoryController = {
  async getHistory(req, res) {
    const { userId } = req.body;

    const result = await getUserHistory(userId);

    res.json(result);
  },
};

export default HistoryController;
