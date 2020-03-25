import { AfterContentInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { StyleService } from '../../core/common-attr';
import { ClassService } from '../../core/common-attr';

@Component({
  selector: 'pz-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less']
})
export class RowComponent implements OnInit, AfterContentInit {

  @Input() type: 'flex' = 'flex';

  @Input() justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' = 'center';

  @Input() align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' = 'center';

  @Input() direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';

  @Input() gutter: number;

  readonly el: HTMLElement = this.elementRef.nativeElement;
  constructor(public colorService: StyleService, public classService: ClassService, public elementRef: ElementRef) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-col-gutter-${this.gutter}`]: this.gutter,
    });
  }

  setStyle() {
    this.colorService.updateColor(this.el, {
      display: this.type,
      justifyContent: this.justify,
      alignItem: this.align
    });
  }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.setClass();
    this.setStyle();
  }
}
