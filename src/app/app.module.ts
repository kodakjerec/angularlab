import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CounterComponent } from './homeworks/counter/counter.component';
import { SearchComponent } from './homeworks/search/search.component';
import { FilterDemoComponent } from './homeworks/filterDemo/filterDemo.component';
import { FormatMoneyPipe } from './homeworks/filterDemo/filterDemo.pipe.spec';
import { ListDemoComponent } from './homeworks/list-demo/list-demo.component';
import { MenuComponent } from './homeworks/menu/menu.component';
import { PopupModalComponent } from './homeworks/popup-modal/popup-modal.component';
import { ModalDemoComponent } from './homeworks/modal-demo/modal-demo.component';
import { SigninFormComponent } from './homeworks/signin-form/signin-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CounterComponent,
    SearchComponent,
    FilterDemoComponent,
    FormatMoneyPipe,
    ListDemoComponent,
    MenuComponent,
    PopupModalComponent,
    ModalDemoComponent,
    SigninFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
