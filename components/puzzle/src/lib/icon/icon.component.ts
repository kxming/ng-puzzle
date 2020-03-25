import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AttrService, ClassService, StyleService } from '../core/common-attr';

@Component({
  selector: 'pz-icon, Icon',
  templateUrl: './icon.component.html',
  styleUrls: [
    './icon.component.less',
    // './style/font-awesome/font-awesome.css',
    // './style/material/css/material-design-iconic-font.min.css',
    // './style/themify/themify-icons.css'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class IconComponent implements OnInit, AfterContentInit {


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
          [`fa&nbsp;${this.icon}`]: this.icon
        });
        break;
      case 'material':
        this.classService.updateClass(this.el, {
          [`zmdi&nbsp;${this.icon}`]: this.icon
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
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.setClass();
    this.setAttr();
    this.setColor();
  }
}
