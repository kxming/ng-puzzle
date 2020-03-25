import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { AttrService, ClassService, StyleService } from '../core/common-attr';



@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule
  ],
  providers: [ClassService, StyleService, AttrService],
  exports: [IconComponent]
})
export class IconModule { }
