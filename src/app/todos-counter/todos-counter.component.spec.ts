import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosCounterComponent } from './todos-counter.component';

describe('TodosCounterComponent', () => {
  let component: TodosCounterComponent;
  let fixture: ComponentFixture<TodosCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
