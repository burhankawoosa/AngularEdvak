import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { img: 'assets/brands/1.svg' },
    { img: 'assets/brands/2.svg' },
    { img: 'assets/brands/3.svg' },
    { img: 'assets/brands/4.svg' },
    { img: 'assets/brands/3.svg' },
    { img: 'assets/brands/6.svg' },
    { img: 'assets/brands/3.svg' },
    { img: 'assets/brands/8.svg' },
    { img: 'assets/brands/9.svg' },
    { img: 'assets/brands/10.svg' },
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1, "autoplay": true,"autoplaySpeed":2000};

  constructor() {
     


   }

  ngOnInit(): void {
    
    
  }

}
