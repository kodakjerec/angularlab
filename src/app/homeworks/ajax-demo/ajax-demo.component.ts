import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from 'src/app/services/http/config.service';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-ajax-demo',
  templateUrl: './ajax-demo.component.html',
  styleUrls: ['./ajax-demo.component.scss'],
  providers: [ConfigService],
})
export class AjaxDemoComponent implements OnInit {
  constructor(private http: ConfigService,
    public dialog: MatDialog) {}

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

  showDetail(item:any) {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      width: '600px',
      data: { content: item, ajaxDemo: true },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }
}
