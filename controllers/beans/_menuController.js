import { getMenuFromDatabase } from '../../models/beansModel.js';

const MenuController = {
  async getMenu(req, res) {
    const menu = await getMenuFromDatabase();

    const result = {
      success: true,
      menu,
    };

    res.status(200).json(result);
  },
};

export default MenuController;
