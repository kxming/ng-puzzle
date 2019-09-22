import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

export type palette =
  | 'prime'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark'
  | 'secondary'
  | 'link'
  | string;

export interface Color {
  pzColor: palette;
}

@Injectable({
  providedIn: 'root'
})
export class AttrService {
  private renderer: Renderer2;
  private colorList: object = {};

  constructor(public rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateAttr(el: HTMLElement, attrList: object) {
    this.removeColor(el, attrList);
    this.colorList = { ...attrList };
    this.addColor(el, this.colorList);
  }

  removeColor(el: HTMLElement, colorList: object) {
    for (const key in colorList) {
      if (colorList.hasOwnProperty(key)) {
        this.renderer.removeStyle(el, key);
      }
    }
  }

  addColor(el: HTMLElement, colorList: object) {
    for (const key in colorList) {
      if (colorList.hasOwnProperty(key) && key) {
        this.renderer.setStyle(el, key, colorList[key]);
      }
    }
  }
}
