import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { AttrService, ClassService, StyleService } from '../core/common-attr';
import { ButtonDirective } from './button.directive';

@NgModule({
  declarations: [ButtonComponent, ButtonDirective],
  imports: [
    CommonModule
  ],
  providers: [ClassService, StyleService, AttrService],
  exports: [
    ButtonComponent,
    ButtonDirective
  ]
})
export class ButtonModule { }
