import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleModule } from '@puzzle/ng';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PuzzleModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
