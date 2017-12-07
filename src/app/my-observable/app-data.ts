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

// private, nie ma export, jednyne, prawdziwe źródło danych
let todos: Item[] = [];

// prywatny
const todosSubject = new SubjectImpl();

// $ - konwencja nazw, to jest stream, reszta apliakcji widzi ten stream i może się
// do niego podpiąć i nie musi wiedzieć jak te dane są populowane (websocket, http, etc)
export let todos$: IObservable = {
  subscribe: obs => todosSubject.subscribe(obs),
  unsubscribe: obs => todosSubject.unsubscribe(obs)
};

export function initTodos(newTodos: Item[]) {
  todos = _.cloneDeep(newTodos);
  todosSubject.next(todos);
};