import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';
import { AttrService, ClassService, StyleService } from '../core/common-attr';



@NgModule({
  declarations: [IconComponent, IconDirective],
  imports: [
    CommonModule,
  ],
  providers: [ClassService, StyleService, AttrService],
  exports: [IconComponent, IconDirective]
})
export class IconModule { }
