import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  constructor ( private router: Router,
    private route: ActivatedRoute ){};

  /**
   * @description go back to home
   * @param this any
   * @returns null
   */
  gotoHome = function(this:any) {
    this.router.navigate(['/home', { id:'123'}], { relativeTo: this.route });
  }
}
