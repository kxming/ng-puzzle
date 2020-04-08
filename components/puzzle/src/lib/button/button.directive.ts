import { AfterContentInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AttrService, ClassService, Color, Palette, Size, StyleService, Shape } from '../core/common-attr';

@Directive({
  selector: '[pzButton], [pz-button]',
  exportAs: `pz-button`
})
export class ButtonDirective implements OnInit, AfterContentInit, OnChanges {

  @Input() size: Size = 'default';

  @Input() type: Palette = 'prime';

  @Input() color: Color = 'red';

  @Input() shape: Shape = 'default';

  @Input() ghost: boolean = false;

  @Input() loading: boolean = false;

  @Input() disabled: boolean = false;

  @Input() block: boolean = false;

  @Input() tabIndex: number;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-btn`]: true,
      [`pz-btn-${this.block}`]: this.block,
      [`pz-btn-${this.disabled}`]: this.disabled,
      [`pz-btn-${this.ghost}`]: this.ghost,
      [`pz-btn-${this.loading}`]: this.loading,
      [`pz-btn-${this.size}`]: this.size,
      [`pz-btn-${this.shape}`]: this.shape,
      [`pz-btn-${this.type}`]: this.type,
    });
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
      tabindex: this.tabIndex
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
      color: this.color
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.setClass();
    this.setAttr();
    this.setColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
