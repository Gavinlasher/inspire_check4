import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "./ApiService.js";

export class QuotesService {
  async getQuotes() {
    const res = await quoteApi.get();
    console.log(res.data, "this should be a quote");
    ProxyState.quote = new Quote(res.data);
  }
}

export const quotesService = new QuotesService();
