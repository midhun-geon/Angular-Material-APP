import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closesideNav=new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }
onClose(){
  this.closesideNav.emit();
}
}