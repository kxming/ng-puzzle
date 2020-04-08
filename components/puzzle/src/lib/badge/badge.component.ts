import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Color, Position, Palette, Shape, ClassService, AttrService, StyleService } from '../core/common-attr';

@Component({
  selector: 'pz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less'],
  exportAs: 'pzBadge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() type: Palette = 'default';

  @Input() shape: Shape = 'default';

  @Input() position: Position = 'rightTop';

  @Input() color: Color = 'red';

  @Input() count: number = 0;

  @Input() dot: boolean = true;

  // count为0时是否隐藏
  @Input() hidden: boolean = false;

  // count大于99时显示为99...
  @Input() overFlow: number = 99;

  // badge显示时是否闪烁
  @Input() flicker: boolean = false;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  class: string = 'pz-badge-';

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`${this.class}`]: true,
      [`${this.class}${this.type}`]: this.type,
      [`${this.class}${this.shape}`]: this.shape,
      [`${this.class}${this.flicker}`]: this.flicker,
      [`${this.class}${this.position}`]: this.position
    });
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
      background: this.color
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
