import { Item } from 'app/shared/item';
import { Component, OnInit } from '@angular/core';
import { todosStore } from 'app/my-observable/app-data';

@Component({
  selector: 'app-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.css']
})
export class TodosCounterComponent implements OnInit {

  private count: number = 0;

  ngOnInit() {
    todosStore.todos$.subscribe(
      (data: Item[]) => {
        this.count = data.length;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  private updateCount(count) {
    this.count = count;
  }


}
