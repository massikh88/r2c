import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
public images : any;
  constructor(config: NgbCarouselConfig) {}

  ngOnInit(): void {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1359/400`);
  }

}
