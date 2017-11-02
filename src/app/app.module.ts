import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from 'angular2-click-outside/clickOutside.directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
