import { ProxyState } from "../AppState.js";
import { Img } from "../Models/Img.js";
import { imagesApi } from "./ApiService.js";

export class ImgService {
  async getImg() {
    const res = await imagesApi.get();
    console.log(res.data);
    ProxyState.img = new Img(res.data);

    document.body.style.backgroundImage = `url(${ProxyState.img.imgUrl})`;
  }
}

export const imgService = new ImgService();
