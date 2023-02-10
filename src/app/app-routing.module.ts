import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './homeworks/counter/counter.component';
import { FilterDemoComponent } from './homeworks/filterDemo/filterDemo.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PracticeComponent } from './homeworks/practice/practice.component';
import { SearchComponent } from './homeworks/search/search.component';
import { ListDemoComponent } from './homeworks/list-demo/list-demo.component';
import { ModalDemoComponent } from './homeworks/modal-demo/modal-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'filterDemo', component: FilterDemoComponent },
  { path: 'listDemo', component: ListDemoComponent },
  { path: 'popup', component: ModalDemoComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
