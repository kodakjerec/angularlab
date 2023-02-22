import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss'],
})
export class ModalDemoComponent {
  [x: string]: any;
  isOpen: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  /**
   * @description go back to home
   * @param this any
   * @returns null
   */
  gotoHome = function (this: any) {
    this.router.navigate(['/home', { id: '123' }], { relativeTo: this.route });
  };

  showModal() {
    const dialogRef = this.dialog.open(PopupModalComponent, {
      width: '600px',
      data: { content: '123' },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
    this.isOpen = true;
  }

  isOpenChange(event: any) {
    console.log(event);
    this.isOpen = event;
  }
}
