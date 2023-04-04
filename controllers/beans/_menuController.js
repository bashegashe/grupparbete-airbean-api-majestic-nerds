const MenuController = {
  async getMenu(req, res) {
    // Skicka meny från assets
    res.json({ menu: [] });
  },
};

export default MenuController;
