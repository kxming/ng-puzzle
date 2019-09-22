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
import { Color, ColorService, Palette } from '../core/common-attr/color.service';
import { ClassService } from '../core/common-attr/class.service';
import { AttrService } from '../core/common-attr/attr.service';

@Component({
  selector: `[pz-button]`,
  templateUrl: './button.component.html',
  styleUrls: ['./style/button.component.less'],
  exportAs: `pzButton`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit, AfterContentInit, OnChanges, Color {

  @Input() pzSize: 'small' | 'default' | 'large' = 'default';

  @Input() pzType: 'default' | 'circle' | 'cube' | 'fab' = 'default';

  @Input() pzColor: Palette = 'prime';

  @Input() pzGhost: boolean = false;

  @Input() pzLoading: boolean = false;

  @Input() pzTabIndex: number;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();

  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: ColorService) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-btn`]: true,
      [`pz-btn-${this.pzType}`]: this.pzType,
      [`pz-btn-${this.pzSize}`]: this.pzSize,
      [`pz-btn-${this.pzColor}`]: this.pzColor,
      [`pz-btn-${this.pzGhost}`]: this.pzGhost,
      [`pz-btn-${this.pzLoading}`]: this.pzLoading,
    });
  }

  setAttr() {
    this.attrService.updateAttr(this.el, {
      tabindex: this.pzTabIndex
    });
  }

  setColor() {
    this.colorService.updateColor(this.el, {
      color: this.pzColor
    });
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.setClass();
    this.setAttr();
    if (this.pzColor === 'prime' || 'danger' || 'warning' || 'success' || 'info' || 'light' || 'dark' || 'secondary' || 'link') {
      this.classService.updateClass(this.el, {
        [`pz-btn-${this.pzColor}`]: this.pzColor,
      });
    } else {
      this.setColor();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
