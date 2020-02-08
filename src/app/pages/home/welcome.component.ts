import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 30000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
