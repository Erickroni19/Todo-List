import { computed, Injectable, signal } from '@angular/core';
import { Todo } from './interface/Todos.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todos = signal<Todo[]>([]);
  currentTodos = computed( () => this._todos() )


  addTodo(newTodo: Todo) {
    if (!this._todos().some(todo => todo.todo === newTodo.todo)) {
      this._todos.set([...this._todos(), newTodo]);
    }

  }

  deletedTodo(deletedTodo: Todo) {
    this._todos.set(this._todos().filter(todo => todo !== deletedTodo));
  }

  completeTodo(todoToUpdate: Todo) {

    this._todos.set(this._todos().map(todo =>
      todo.todo === todoToUpdate.todo
        ? { ...todo, state: todo.state === 'complete' ? 'todo' : 'complete' }
        : todo
    ));
  }
}
