import {
  Injectable,
  Renderer2,
  RendererFactory2
} from '@angular/core';

@Injectable()
export class AttrService {
  private renderer: Renderer2;
  private attrList: object = {};

  constructor(public rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateAttr(el: HTMLElement, attrList: object) {
    this.removeAttr(el, attrList);
    this.attrList = {...attrList};
    this.addAttr(el, this.attrList);
  }

  removeAttr(el: HTMLElement, attrList: object) {
    for (const key in attrList) {
      if (attrList.hasOwnProperty(key)) {
        this.renderer.removeAttribute(el, key);
      }
    }
  }

  addAttr(el: HTMLElement, attrList: object) {
    for (const key in attrList) {
      if (attrList.hasOwnProperty(key) && attrList[key]) {
        this.renderer.setAttribute(el, key, attrList[key]);
      }
    }
  }
}
