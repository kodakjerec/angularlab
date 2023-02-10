import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.scss'],
})
export class ModalDemoComponent {
  isOpen: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   * @description go back to home
   * @param this any
   * @returns null
   */
  gotoHome = function (this: any) {
    this.router.navigate(['/home', { id: '123' }], { relativeTo: this.route });
  };

  showModal() {
    this.isOpen = true;
  }

  isOpenChange(event: any) {
    console.log(event);
    this.isOpen = event;
  }
}
