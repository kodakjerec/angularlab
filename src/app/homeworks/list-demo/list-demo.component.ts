import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface item {
  name: string;
  index: number;
}

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss'],
})
export class ListDemoComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  list: item[] = [];
  itemContent: item = {
    name: '',
    index: 0,
  };

  ngOnInit() {
    this.list = [
      {
        name: 'a',
        index: 0,
      },
      {
        name: 'b',
        index: 1,
      },
      {
        name: 'c',
        index: 2,
      },
      {
        name: 'd',
        index: 3,
      },
      {
        name: 'e',
        index: 4,
      },
      {
        name: 'f',
        index: 5,
      },
    ];
  }

  clickItem(item: any, index: number) {
    this.itemContent = item;
    this.itemContent.index = index;
  }

  /**
   * @description go back to home
   * @param this any
   * @returns null
   */
  gotoHome = function (this: any) {
    this.router.navigate(['/home', { id: '123' }], { relativeTo: this.route });
  };
}
