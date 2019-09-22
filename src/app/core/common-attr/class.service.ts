import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private renderer: Renderer2;
  private classList: object = {};

  constructor(public rendererFactory2: RendererFactory2) {
    this.renderer = rendererFactory2.createRenderer(null, null);
  }

  updateClass(el: HTMLElement, classList: object) {
    this.removeClass(el, classList);
    this.classList = { ...classList };
    this.addClass(el, this.classList);
  }

  removeClass(el: HTMLElement, classList: object) {
    for (const key in classList) {
      if (classList.hasOwnProperty(key)) {
        this.renderer.removeClass(el, key);
      }
    }
  }

  addClass(el: HTMLElement, classList: object) {
    for (const key in classList) {
      if (classList.hasOwnProperty(key) && classList[key]) {
        this.renderer.addClass(el, key);
      }
    }
  }
}
