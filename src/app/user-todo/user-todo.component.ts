import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {
  title: string = '';
  id = '';
  url = '';
  delurl = '';
  delData = {};
  clients: String[];
  createSession = [];
  value = {};
  obj = {};
  userTodoList: any;
  arryValue : any;
  constructor(private todoService: TodoService,private router: Router,private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
   this.id = this.route.snapshot.params.id;
   this.url = "https://jsonplaceholder.typicode.com/todos?userId=" + this.id;
    this.http.get(this.url).subscribe(data => {
      this.createSession[this.id]= data;
      sessionStorage.setItem("userTodoList", JSON.stringify(this.createSession));
      this.value = JSON.parse(sessionStorage.getItem('userTodoList'));
      this.userTodoList = this.value[this.id];
    });
  }
  removeTodo(data){
    this.userTodoList.splice(data, 1);
  }
  setValue() {
    if (this.title) {
    this.obj =  {
        "userId": this.id,
        "id": this.userTodoList[this.userTodoList.length-1].id + 1,
        "title": this.title,
        "completed": false
      }
    }
    this.userTodoList.push(this.obj);
    this.title = '';
  }
  changeValue(data){
    if(this.userTodoList[data].completed){
      this.userTodoList[data].completed = false;
    }else{
      this.userTodoList[data].completed = true;
    }
  }
  back(){
    this.router.navigate([''])
  }
}
