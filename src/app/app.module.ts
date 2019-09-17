import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PuzzleModule, ButtonModule } from 'puzzle';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PuzzleModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
