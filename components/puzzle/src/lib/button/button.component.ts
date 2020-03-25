import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  ElementRef,
  AfterContentInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Color, StyleService, Palette } from '../core/common-attr';
import { ClassService } from '../core/common-attr';
import { AttrService } from '../core/common-attr';

@Component({
  selector: `pz-button`,
  templateUrl: './button.component.html',
  styleUrls: ['./style/button.component.less'],
  exportAs: `pzButton`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, AfterContentInit, OnChanges, Color {

  @Input() size: 'small' | 'default' | 'large' = 'default';

  @Input() type: 'default' | 'circle' | 'cube' | 'fab' = 'default';

  @Input() color: string = 'red';

  @Input() status: Palette = 'prime';

  @Input() ghost: boolean = false;

  @Input() loading: boolean = false;

  @Input() tabIndex: number;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();

  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-btn`]: true,
      [`pz-btn-${this.type}`]: this.type,
      [`pz-btn-${this.size}`]: this.size,
      [`pz-btn-${this.status}`]: this.status,
      [`pz-btn-${this.ghost}`]: this.ghost,
      [`pz-btn-${this.loading}`]: this.loading,
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
