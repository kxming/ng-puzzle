import { Injectable } from '@angular/core';
import { IconType } from './icon';

@Injectable()
export class IconRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: IconType[]): void {
    icons.forEach((icon: IconType) => {
      this.registry.set(icon.name, icon.data)
    })
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn('暂时没有这个图标！')
    }
    return this.registry.get(iconName)
  }
}
