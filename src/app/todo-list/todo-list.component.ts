import { Component, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoListService } from '../services/todo-list.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../interface/Todos.interface';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos = computed( () => this.todoListService.currentTodos()  )

  constructor(private todoListService: TodoListService) {}

  inputNewTodo = new FormControl('');

  addTodo( todo: any ) {

    if (!todo.trim()) return;

    const newTodo: Todo = {
      todo: todo,
      state: 'todo',
    }

    this.todoListService.addTodo(newTodo);
    this.inputNewTodo.setValue('');

  }

  deleteTodo(todo: Todo) {
    this.todoListService.deletedTodo(todo);
  }

  completeTodo( todo: Todo ) {
    this.todoListService.completeTodo(todo)
  }



}
