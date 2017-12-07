import * as _ from 'lodash';
import { Item } from './../shared/item';
import { Observable } from 'rxjs/Observable';

export interface IObserver {
  next(data:any);
}

export interface IObservable {
  subscribe(obs: IObserver);
  unsubscribe(obs: IObserver);  
}

export interface ISubject extends IObserver, IObservable {
}

// bardzo podobne do GlobalEventBus
class SubjectImpl implements ISubject {

  private observers: IObserver[] = [];

  next(data: any) {
    this.observers.forEach(obs => obs.next(data));
  }

  subscribe(obs: IObserver) {
    this.observers.push(obs);
  }

  unsubscribe(obs: IObserver) {
    _.remove(this.observers, ele => ele === obs);
  }
  
}

class TodosStore {

  private todos: Item[] = [];
  private todosSubject = new SubjectImpl();
  
  public todos$: IObservable = {
    subscribe: obs => {
      this.todosSubject.subscribe(obs);
      obs.next(this.todos);
    },
    unsubscribe: obs => this.todosSubject.unsubscribe(obs)
  };
  
  init(newTodos: Item[]) {
    this.todos = _.cloneDeep(newTodos);
    this.broadcast();
  }

  addTodo(newTodo: Item) {
    // klonujemy bo nie chcemy mieć referencji do przekazanego obiektu,
    // tym sposobem zapewnimy że store jest jedynym owner'em danych
    this.todos.push(_.cloneDeep(newTodo));
    this.broadcast();
  }

  deleteTodo(todo: Item) {
    _.remove(this.todos, ele => ele.id === todo.id);
    this.broadcast();
  }

  toggleTodo(todo: Item) {
    const todoToToggle = _.find(this.todos, ele => ele.id === todo.id);
    todoToToggle.completed = !todoToToggle.completed;
    this.broadcast();
  }

  private broadcast() {
    this.todosSubject.next(_.cloneDeep(this.todos));
  }
}

export const todosStore = new TodosStore();