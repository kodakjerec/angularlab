
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ConfigService } from 'src/app/services/http/config.service';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html'
})

export class SliderComponent implements OnInit {
    constructor(private http: ConfigService,) { }
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 100,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }

    list: Array<any> = [];

    ngOnInit(): void {
      this.init();
    }
  
    async init() {
      let answer = await this.http.post('http://localhost:9999/product/list');
      if (answer.isSuccess) {
        this.list = answer.data;
      } else {
        this.list = [];
      }
    }
}