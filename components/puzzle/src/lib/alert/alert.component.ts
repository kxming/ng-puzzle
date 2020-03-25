import { AfterContentInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { AttrService, ClassService, Color, Palette, Status, StyleService } from '../core/common-attr';

@Component({
  selector: 'pz-alert, Alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit, AfterContentInit, Color, Status {

  @Input() header: string;

  @Input() closeable: boolean = false;

  @Input() color: string;

  @Input() status: Palette;

  @Input() icon: boolean = false;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-alert-${this.status}`]: this.status,
    });
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

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.setClass();
    this.setAttr();
    this.setColor();
  }
}
