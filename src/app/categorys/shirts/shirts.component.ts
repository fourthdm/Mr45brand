import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  pro: any;
  shirts: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
