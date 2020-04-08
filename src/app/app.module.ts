import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleModule } from '@puzzle/ng';
import { IconModule as AntdIconModule } from '@ant-design/icons-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PuzzleModule, AntdIconModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
