import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { myTodoApi } from "./ApiService.js"

export class TodosService{

async createTask(rawTask){
const res = await myTodoApi.post('' , rawTask )
console.log(res.data);
let newTask = new Todo(res.data)
ProxyState.todo = [newTask,...ProxyState.todo]
ProxyState.todo = ProxyState.todo
}


async getAllTask(){
const res = await myTodoApi.get()
console.log(res.data);
ProxyState.todo = res.data.map(t => new Todo(t))
}
  

async deleteTodo(id){
const res = await myTodoApi.delete('' + id)
ProxyState.todo = ProxyState.todo.filter(t => t.id != id)


}
async completeTodo(id ,updateTodo){
  const currentTodo = ProxyState.todo.find(t => t.id == id)
  currentTodo.completed = !currentTodo.completed
console.log(currentTodo);
const res = await myTodoApi.put(''+ id , currentTodo )
console.log(res.data , 'new to list when updated');
ProxyState.todo = ProxyState.todo

}




}






export const todosService = new TodosService()