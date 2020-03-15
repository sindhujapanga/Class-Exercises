import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  title = 'hello-welcome';
  data='';
  displayData()
  {
    if(this.data=='')
    this.data="honda";
    else
    this.data='';
  }
  num=0;
  decreaseNumber()
  {
    if(this.num>0)
    {
      --this.num;
    }
  }
  increaseNumber()
  { 
   
   if(this.num<100)
    {
      ++this.num;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
