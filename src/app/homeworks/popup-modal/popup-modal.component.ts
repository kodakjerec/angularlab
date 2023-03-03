import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss'],
})
export class PopupModalComponent implements OnInit {
  isOpen = false;

  constructor(
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onClose() {
    this.dialogRef.close(); //關閉dialog function
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}
