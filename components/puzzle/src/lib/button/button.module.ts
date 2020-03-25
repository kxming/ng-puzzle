import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { AttrService, ClassService, StyleService } from '../core/common-attr';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ],
  providers: [ClassService, StyleService, AttrService],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
