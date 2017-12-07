import * as _ from 'lodash';
import { Item } from './../shared/item';
import { Observable, BehaviorSubject, Observer } from 'rxjs';

class TodosStore {

  // z BehaviorSubject to nie jest potrzebne
  // private todos: Item[] = [];
  // BehaviorSubject zamiast Subject (timming issue, zwykły Subject "nie pamięta" poprzedniej wartosci)
  private todosSubject = new BehaviorSubject<Item[]>([]);

  public todos$: Observable<Item[]> = this.todosSubject.asObservable();

  init(newTodos: Item[]) {
    this.todosSubject.next(_.cloneDeep(newTodos));
  }

  addTodo(newTodo: Item) {
    const todos = this.cloneTodos();
    todos.push(_.cloneDeep(newTodo));
    this.todosSubject.next(todos);
  }

  deleteTodo(todo: Item) {
    const todos = this.cloneTodos();
    _.remove(todos, ele => ele.id === todo.id);
    this.todosSubject.next(todos);
  }

  toggleTodo(todo: Item) {
    const todos = this.cloneTodos();
    const todoToToggle = _.find(todos, ele => ele.id === todo.id);
    todoToToggle.completed = !todoToToggle.completed;
    this.todosSubject.next(todos);
  }

  private cloneTodos() {
    return _.cloneDeep(this.todosSubject.getValue());
  }
}

export const todosStore = new TodosStore();