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
  
  public init(newTodos: Item[]) {
    this.todos = _.cloneDeep(newTodos);
    this.todosSubject.next(this.todos);
  }
}

export const todosStore = new TodosStore();