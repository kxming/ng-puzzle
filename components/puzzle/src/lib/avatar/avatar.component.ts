import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input, OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Color, Palette, Size, Shape, ClassService, AttrService, StyleService } from '../core/common-attr';

@Component({
  selector: 'pz-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less'],
  exportAs: `pz-avatar`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AvatarComponent implements OnInit, AfterContentInit, OnChanges {

  @Input() type: Palette = 'default';

  @Input() size: Size = 'default';

  @Input() shape: Shape = 'default';

  @Input() url: string;

  @Input() icon: string;

  @Input() text: string;

  // 替代文本
  @Input() alt: string;

  @Input() width: string;

  @Input() height: string;

  @Input() color: Color = 'red';

  readonly el: HTMLElement = this.elementRef.nativeElement;

  class: string = 'pz-avatar-';

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`${this.class}`]: true,
      [`${this.class}${this.type}`]: this.type,
      [`${this.class}${this.shape}`]: this.shape,
      [`${this.class}${this.size}`]: this.size
    });
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
      background: this.color,
      width: this.width,
      height: this.height
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
