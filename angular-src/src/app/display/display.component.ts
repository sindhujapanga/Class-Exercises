import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  title = 'hello-world';
  data = '';
  num=0;
  constructor() { }

  ngOnInit(): void {
  }
  displayData(){
    this.data = 'Sindhuja';
  }
  decrementNumber()
  {
    --this.num;
  }
  incrementNumber()
  {
    ++this.num;
  }
  

}
