import { Directive, ElementRef, Input } from '@angular/core';
import { AttrService, ClassService, StyleService } from '../core/common-attr';

@Directive({
  selector: '[pzIcon]'
})
export class IconDirective {

  @Input() type: 'font-awesome' | 'material' | 'themify' = 'themify';

  @Input() icon: string;

  @Input() color: string = '#000';

  @Input() spin: boolean = false;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(public elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    switch (this.type) {
      case 'font-awesome':
        this.classService.updateClass(this.el, {
          [`fa ${this.icon}`]: this.icon
        });
        break;
      case 'material':
        this.classService.updateClass(this.el, {
          [`zmdi ${this.icon}`]: this.icon
        });
        break;
      case 'themify':
        this.classService.updateClass(this.el, {
          [`${this.icon}`]: this.icon
        });
        break;
      default:
        this.classService.updateClass(this.el, {
          [`${this.icon}`]: this.icon
        });
    }
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
      color: this.color
    });
  }
}
