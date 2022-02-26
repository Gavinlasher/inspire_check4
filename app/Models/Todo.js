import { generateId } from "../Utils/generateId.js";

export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description;
    this.user = data.user;
    this.id = data.id || generateId()
  }

  get Template() {
    return /*html*/ `
    <div>
      <p>${this.completed}/${this.TotalList}</p>
    </div>
    <div class="border border-dark">
     ${this.TaskTemplate}
    </div>
  

`;
  }




get TaskTemplate(){
  return `
  <div class="form-check bg-secondary text-center d-flex justify-content-between">
    ${this.description}
    <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todosController.completeTodo('${this.id}')"  value="" >
    <i class="mdi mdi-delete" onclick="app.todosController.deleteTodo('${this.id}')"></i>
  </div>
  
  `
}




}
