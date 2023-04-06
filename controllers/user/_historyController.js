import { getUserHistory } from '../../models/userModel.js';

const HistoryController = {
  async getHistory(req, res) {
    const { userId } = req.body;

    if (res.locals.isAuthorized) {
      const result = await getUserHistory(userId);
      res.json(result);
    } else {
      res.json({
        success: false,
        error: 'Unauthorized access',
      });
    }
  },
};

export default HistoryController;
