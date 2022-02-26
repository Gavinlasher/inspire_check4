import { ProxyState } from "../AppState.js";
import { imgService } from "../Services/ImgService.js";

async function getImg() {
  try {
    await imgService.getImg();
  } catch (error) {
    console.log(error);
  }
}

export class ImgController {
  constructor() {
    console.log("hello this from the img controller");
    getImg();
  }
}
