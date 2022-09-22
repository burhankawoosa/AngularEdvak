import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practicemanagment',
  templateUrl: './practicemanagment.component.html',
  styleUrls: ['./practicemanagment.component.css']
})
export class PracticemanagmentComponent implements OnInit {

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