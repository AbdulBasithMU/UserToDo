import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';

import { TodoService } from './services/todo.service';

const appRoutes:Routes = [
  {
    path: '',
    component: UserDetailsComponent
  },
  {
    path: 'usertodo/:id',
    component: UserTodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserTodoComponent,
    UserDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
