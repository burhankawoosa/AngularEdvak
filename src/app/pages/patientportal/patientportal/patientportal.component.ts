import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientportal',
  templateUrl: './patientportal.component.html',
  styleUrls: ['./patientportal.component.css']
})
export class PatientportalComponent implements OnInit {

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
