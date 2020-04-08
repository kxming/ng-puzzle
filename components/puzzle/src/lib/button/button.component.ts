import { Component, Input, OnInit, ViewEncapsulation, ChangeDetectionStrategy, AfterContentInit, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { AttrService, ClassService, Color, Palette, Size, StyleService, Shape } from '../core/common-attr';

@Component({
  selector: `pz-button`,
  templateUrl: './button.component.html',
  styleUrls: ['./style/button.component.less'],
  exportAs: `pz-button`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() type: Palette = 'prime';

  @Input() size: Size = 'default';

  @Input() color: Color = 'red';

  @Input() shape: Shape = 'default';

  @Input() ghost: boolean = false;

  @Input() loading: boolean = false;

  @Input() disabled: boolean = false;

  @Input() block: boolean = false;

  @Input() tabIndex: number;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  class: string = 'pz-btn-';

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`${this.class}`]: true,
      [`${this.class}${this.type}`]: this.type,
      [`${this.class}${this.size}`]: this.size,
      [`${this.class}${this.shape}`]: this.shape,
      [`${this.class}${this.ghost}`]: this.ghost,
      [`${this.class}${this.loading}`]: this.loading,
      [`${this.class}${this.disabled}`]: this.disabled,
      [`${this.class}${this.block}`]: this.block,
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
