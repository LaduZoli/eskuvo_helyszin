import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {


  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('constructor called.');
   }

  ngOnInit(): void {
    console.log('ngOnit called.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }

  menuSwitch(pageValue: string) {
    this.selectedPage.emit(pageValue);    
  }

}
