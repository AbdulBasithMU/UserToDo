import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  results: any;
  constructor(private router: Router,private http: HttpClient) {}
  ngOnInit() : void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.results = data;
    });
  }
  OnClick(data){
    this.router.navigate(['/usertodo',data.id])
  }
}
