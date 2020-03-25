import { AfterContentInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ClassService } from '../../core/common-attr';

@Component({
  selector: 'pz-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.less']
})
export class ColComponent implements OnInit, AfterContentInit {

  @Input() span: number;

  @Input() offset: number;

  @Input() pull: number;

  @Input() push: number;

  @Input() xs: number;

  @Input() sm: number;

  @Input() md: number;

  @Input() lg: number;

  @Input() xl: number;

  readonly el: HTMLElement = this.elementRef.nativeElement;
  constructor(public classService: ClassService, public elementRef: ElementRef) { }

  setClass() {
    this.classService.updateClass(this.el, {
      [`pz-col-${this.span}`]: this.span,
      [`pz-col-offset-${this.offset}`]: this.offset,
      [`pz-col-pull-${this.pull}`]: this.pull,
      [`pz-col-push-${this.push}`]: this.push,
      [`pz-col-xs-${this.xs}`]: this.xs,
      [`pz-col-sm-${this.sm}`]: this.sm,
      [`pz-col-md-${this.md}`]: this.md,
      [`pz-col-lg-${this.lg}`]: this.lg,
      [`pz-col-xl-${this.xl}`]: this.xl,
    });
  }
  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.setClass();
  }
}
