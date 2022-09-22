import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ehr',
  templateUrl: './ehr.component.html',
  styleUrls: ['./ehr.component.css']
})
export class EhrComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
    this.ScrollTo(fragment);
  })
}
  
  ScrollTo(section:any){
  setTimeout(() => {
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  },);
   
  }
}
