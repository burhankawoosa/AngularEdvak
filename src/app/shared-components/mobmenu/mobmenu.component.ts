import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobmenu',
  templateUrl: './mobmenu.component.html',
  styleUrls: ['./mobmenu.component.css']
})
export class MobmenuComponent implements OnInit {
  @Output() public sidenavclose=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
public onSidenavClose=()=>{
  this.sidenavclose.emit();
}
}
