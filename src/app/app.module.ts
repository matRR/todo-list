import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserEventsComponent } from './browser-events/browser-events.component';
import { MyObserverComponent } from './my-observer/my-observer.component';
import { TodosComponent } from './todos/todos.component';
import { TodosCounterComponent } from './todos-counter/todos-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventsComponent,
    MyObserverComponent,
    TodosComponent,
    TodosCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
