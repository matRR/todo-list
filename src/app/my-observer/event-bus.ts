import * as _ from 'lodash';

export interface MyObserver {
  notify(data: any);
}

interface MySubject {
  registerObserver(obs: MyObserver);
  unregisterObserver(obs: MyObserver);
  notifyObservers(data: any);
}

class EventBus implements MySubject {

  private observers: MyObserver[] = [];

  registerObserver(obs: MyObserver) {
    this.observers.push(obs);
  }

  unregisterObserver(obs: MyObserver) {
    _.remove(this.observers, ele => ele === obs);
  }

  notifyObservers(data: any) {
    this.observers.forEach((obs: MyObserver) => {
      obs.notify(data);
    });
  }

}

export const GlobalEventBus = new EventBus();
