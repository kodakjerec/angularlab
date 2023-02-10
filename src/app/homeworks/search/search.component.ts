import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  list:string[] = ['Ada','Aaliyah','Adela','Basia','Bonnie','Brook','Candice','Celeste','Cheryl','Ella','Eudora','Gemma'];
  listFiltered:string[] = this.list;
  searchText: string = '';

  /**
   * @description search
   * @param
   * @returns
   */
  search() {
    console.log('search')
    let tempList = this.list.filter(item=>{
      if (item.toLowerCase().includes(this.searchText.toLowerCase())){
        return item;
      }
      return null;
    })
    console.log(tempList.length)
    if (this.listFiltered.length===0){
      this.listFiltered = this.list;
    } else {
      this.listFiltered = tempList;
    }
  }
}
