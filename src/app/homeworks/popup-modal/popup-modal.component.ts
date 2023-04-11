import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfigService } from 'src/app/services/http/config.service';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss'],
})
export class PopupModalComponent implements OnInit {
  isOpen = false;
  ajaxDemo:boolean = false; // ajax-demo
  itemContent:any = {}; // ajax-demo product content

  constructor(
    private http: ConfigService,
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async ngOnInit() {
    if (this.data.ajaxDemo) {
      this.ajaxDemo = true;

      // query itemContent
      let answer = await this.http.post('http://localhost:9999/product/detail',{
        prodId: this.data.content.prodId
      });
    if (answer.isSuccess) {
      this.itemContent = answer.data;
    }
    }
  }

  onClose() {
    this.dialogRef.close(); //關閉dialog function
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
