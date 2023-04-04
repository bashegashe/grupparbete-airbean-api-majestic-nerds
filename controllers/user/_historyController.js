const HistoryController = {
  async getHistory(req, res) {
    // Fundera på om man ska göra en post & skicka i body här,
    // eller skicka i header som Christoffer gör, userId här fungerar
    // lite som en token och det är därmed inte 'säkert' att skicka i url
    const { userId } = req.query;

    res.json({ success: true, userId });
  },
};

export default HistoryController;
