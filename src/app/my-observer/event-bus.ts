import * as _ from 'lodash';

export const TODOS_AVAILABLE = 'TODOS_AVAILABLE';
export const ADD_NEW_TODO    = 'ADD_NEW_TODO';

export interface MyObserver {
  notify(data: any);
}

interface MySubject {
  registerObserver(event: string, obs: MyObserver);
  unregisterObserver(event: string, obs: MyObserver);
  notifyObservers(event: string, data: any);
}

class EventBus implements MySubject {

  private observers : {[key: string]: MyObserver[]} = {};
  
  registerObserver(event: string, obs: MyObserver) {
    this.observersForEvent(event).push(obs);
  }

  unregisterObserver(event: string, obs: MyObserver) {
    _.remove(this.observersForEvent(event), ele => ele === obs);
  }

  notifyObservers(event: string, data: any) {
    this.observersForEvent(event).forEach((obs: MyObserver) => {
      obs.notify(data);
    });
  }

  private observersForEvent(event: string): MyObserver[] {
    const observersPerType = this.observers[event];
    if (!observersPerType) {
        this.observers[event] = [];
    }
    return this.observers[event];
  }

}

export const GlobalEventBus = new EventBus();
