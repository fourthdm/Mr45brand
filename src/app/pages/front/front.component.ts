import { Component } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  scrolltop = document.getElementById("scrolltop");
  root = document.documentElement;

  scroll() {
    this.root.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


}
