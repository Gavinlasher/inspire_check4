import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

function _drawTodo(){
  let temp = ""
  
  ProxyState.todo.forEach(t => temp += t.Template)
  document.getElementById('todo').innerHTML = temp
}


async function getAllTask(){
try {
  await todosService.getAllTask()


} catch (error) {
  console.error(error);
}
}


export class TodosController{
  constructor(){
    console.log('from todos controller');
   ProxyState.on('todo',_drawTodo)
   getAllTask()
  }

async createTask(){
  try {
    window.event.preventDefault()
    let form = window.event.target
let rawTask = {
 
  description: form.name.value

}
 todosService.createTask(rawTask)


  } catch (error) {
    console.error(error);;
  }
}

async deleteTodo(id){
  try {
    if(await Pop.confirm())
    await todosService.deleteTodo(id)
    console.log(id,'id form the todo');
  } catch (error) {
    console.error(error);
  }
}

async completeTodo(id){
todosService.completeTodo(id )
}


}