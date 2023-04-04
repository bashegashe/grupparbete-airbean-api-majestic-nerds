/*
  Importera alla 'user controllers' här, sätt i ett objekt och exportera en variabel,
  för att smidigare komma åt controllers genom att bara behöva importera controllers från denna fil.

  Anledningen till controllers är uppdelade istället för att ha alla funktioner här direkt är
  för att smidigare kunna samarbete med git & github utan konflikter.

  Eventuellt: när alla 'controllers' är färdiga kan vi flytta hit alla funktioner som i sig för
  det mesta inte kommer vara särskilt stora.
*/

import HistoryController from './_historyController.js';
import LoginController from './_loginController.js';
import RegisterController from './_registerController.js';
import StatusController from './_statusController.js';

export {
  HistoryController, LoginController, RegisterController, StatusController,
};
