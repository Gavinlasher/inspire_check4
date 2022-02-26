import { ImgController } from "./Controllers/ImgController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeatherController } from "./Controllers/WeathersController.js";

class App {

  todosController = new TodosController
  quotesController = new QuotesController();
  weatherController = new WeatherController();
  timesController = new TimesController();
  imgController = new ImgController();
}

window["app"] = new App();
 