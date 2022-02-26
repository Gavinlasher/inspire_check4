export class Todo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this.user = data.user;
  }

  get Template() {
    return /*html*/ `
<div class="border border-dark">
          <form class="" onsubmit="app.tasksController.createTask('${this.id}')">
            <div class="input-group">
              <input required type="text" class="form-control" placeholder="Task..." aria-label="task"
                aria-describedby="task" maxlength="50" minlength="3" id="name">
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                <i class="mdi mdi-plus"></i></button>
            </div>
          </form>
        </div>


`;
  }
}
