import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';
import { AttrService, ClassService, StyleService } from '../core/common-attr';
import { IconRegistry } from './icon.registry';
import { IconModule as AntdIconModule } from '@ant-design/icons-angular';


@NgModule({
  declarations: [IconComponent, IconDirective],
  imports: [
    CommonModule,
    AntdIconModule
  ],
  providers: [ClassService, StyleService, AttrService, IconRegistry],
  exports: [IconComponent, IconDirective]
})
export class IconModule { }
