export const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
  setTimeout: 5000,
});

export const quoteApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
  setTimeout: 5000,
});

export const imagesApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
  setTimeout: 6000,
});

export const myTodoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/gavin/todos",
  setTimeout: 5000,
});
