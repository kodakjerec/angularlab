import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filterDemo.component.html',
  styleUrls: ['./filterDemo.component.scss'],
})
export class FilterDemoComponent {
  money: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  /**
   * @description go back to home
   * @param this any
   * @returns null
   */
  gotoHome = function (this: any) {
    this.router.navigate(['/home', { id: '123' }], { relativeTo: this.route });
  };
}
