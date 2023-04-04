import getMenuFromDatabase from '../../models/beansModel.js';

const MenuController = {
  async getMenu(req, res) {
    const menuRes = await getMenuFromDatabase();

    const result = {
      success: true,
      menu: menuRes,
    };

    res.status(200).json(result);
  },
};

export default MenuController;
