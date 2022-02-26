import { ProxyState } from "../AppState.js";
import { quotesService, QuotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuotes() {
  let currentQuote = ProxyState.quote;
  if (currentQuote) {
    document.getElementById("quotes").innerHTML = ProxyState.quote.Template;
  }
}

async function getQuotes() {
  try {
    await quotesService.getQuotes();
  } catch (error) {
    console.error(error);
    Pop.error(error.message, "error message for quotes");
  }
}

export class QuotesController {
  constructor() {
    console.log("quotes controller is working ");
    ProxyState.on("quote", _drawQuotes);
    getQuotes();
  }
}
