import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit{

  http = inject(HttpClient);
  userList: any[] = [];

  ngOnInit(): void{
    debugger;
    this.getUsers();
  } 

  getUsers(){
    debugger;
    this.http.get("https://68743fcedd06792b9c937143.mockapi.io/api/users").subscribe((result:any) => {
      this.userList = result;
    })
  }

}
