export interface Todo {
  id?: number,
  todo: string,
  state?: 'todo' | 'complete'
}

export enum State {
  todo,
  completed
}
