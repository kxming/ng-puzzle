import { AfterContentInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { AttrService, ClassService, Color, Palette, Size, Status, StyleService } from '../core/common-attr';

@Component({
  selector: 'pz-alert, Alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit, AfterContentInit {

  @Input() header: string;

  @Input() body: string;

  @Input() closeable: boolean = false;

  @Input() color: string;

  @Input() type: Status = 'prime';

  @Input() size: Size = 'default';

  @Input() icon: boolean = false;

  @Input() duration: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }
}
