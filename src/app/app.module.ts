import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CounterComponent } from './homeworks/counter/counter.component';
import { SearchComponent } from './homeworks/search/search.component';
import { FilterDemoComponent } from './homeworks/filterDemo/filterDemo.component';
import { PopupModelComponent } from './homeworks/popup-model/popup-model.component';
import { FormatMoneyPipe } from './homeworks/filterDemo/filterDemo.pipe.spec';
import { ListDemoComponent } from './homeworks/list-demo/list-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CounterComponent,
    SearchComponent,
    FilterDemoComponent,
    PopupModelComponent,
    FormatMoneyPipe,
    ListDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
