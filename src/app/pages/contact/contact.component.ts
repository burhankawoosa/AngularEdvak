import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
onSubmit(data: any){
  this.http.post('http://localhost:3000/sendmail',data)
  .subscribe();
}
}
