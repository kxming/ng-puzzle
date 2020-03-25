import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Color, StyleService, Palette } from '../core/common-attr';
import { ClassService } from '../core/common-attr';
import { AttrService } from '../core/common-attr';

@Component({
  selector: 'pz-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less'],
  exportAs: 'pzBadge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit {

  @Input() count: number;

  @Input() dot: boolean = true;

  // count为0时是否隐藏
  @Input() hidden: boolean = false;

  @Input() overFlow: number = 99;

  @Input() position: 'leftTop' | 'rightTop' = 'rightTop';

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(public elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
    });
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
    });
  }
  ngOnInit() {
  }

}
