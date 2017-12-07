import { todosStore } from 'app/my-observable/app-data';
import { Component, OnInit } from '@angular/core';
import { Item } from 'app/shared/item';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  private items: Item[] = [];

  ngOnInit() {
    todosStore.todos$.subscribe(
      (data: Item[]) => {
        this.items = data;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    );
  }

  toggleTodo(item: Item) {
    todosStore.toggleTodo(item);
  }

  removeTodo(item: Item) {
    todosStore.deleteTodo(item);
  }

}