import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../classes/todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService {
  private todos : any;
  private nextId : number;
  url = '';
  constructor(private http: HttpClient) { 
  }
  public addTodo(text:string): void{
    //let todo = new Todo(this.nextId,text);
    //this.todos.push(todo);
  }
  public getTodoDetails(){
    this.http.get(this.url).subscribe(data => {
      this.todos = [];
      this.todos.push(data);
      return this.todos;
    });
  }
  public getTodos(url:string) {
    this.url = url;
  }

  public removeTodo(id: number): void{
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
