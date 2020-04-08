import { AfterContentInit, Component, ElementRef, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { AttrService, ClassService, StyleService } from '../core/common-attr';
import { IconRegistry } from './icon.registry';

@Component({
  selector: 'pz-icon, Icon',
  templateUrl: './icon.component.html',
  styleUrls: [
    './icon.component.less'
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class IconComponent implements OnInit, AfterContentInit {

  private svgIcon: SVGAElement;

  @Input()
  set type(iconName: string) {
    if (this.svgIcon) {
      this.el.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.el.appendChild(this.svgIcon)
  }

  @Input() icon: string;

  @Input() color: string = '#000';

  @Input() spin: boolean = false;

  readonly el: HTMLElement = this.elementRef.nativeElement;

  constructor(public elementRef: ElementRef,
              private iconRegistry: IconRegistry,
              @Optional() @Inject(Document) private document: any,
              private classService: ClassService,
              private attrService: AttrService,
              private colorService: StyleService) { }

  setClass() {
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

  private svgElementFromString(svgContent: string) {
    const div = this.document.creteElement('DIV');
    div.innerHtml = svgContent;
    return div.querySelector('svg') || this.document.createElementNS()
  }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.setClass();
    this.setAttr();
    this.setColor();
  }
}
