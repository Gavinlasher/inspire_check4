export class Quote {
  constructor(data) {
    this.author = data.author;
    this.content = data.content;
  }

  // later i will need to add a hover effect done in jepordy example
  get Template() {
    return `
    <h3>Quote of the Day </h3>
    <li>${this.content}</li>
    <lil>${this.author}</li>
    `;
  }
}
