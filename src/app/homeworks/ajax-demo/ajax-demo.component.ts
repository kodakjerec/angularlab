import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/http/config.service';

@Component({
  selector: 'app-ajax-demo',
  templateUrl: './ajax-demo.component.html',
  styleUrls: ['./ajax-demo.component.scss'],
  providers: [ConfigService],
})
export class AjaxDemoComponent implements OnInit {
  constructor(private http: ConfigService) {}

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
