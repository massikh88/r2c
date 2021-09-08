import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.less']
})
export class MainFooterComponent implements OnInit {
  date :number;
  constructor() { }

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }

}
