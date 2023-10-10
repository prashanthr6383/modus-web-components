// eslint-disable-next-line
import { Component, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import solidIcons from '@trimble-oss/modus-icons/dist/modus-solid/sprites/modus-icons.svg';
import outlinedIcons from '@trimble-oss/modus-icons/dist/modus-outlined/sprites/modus-icons.svg';
import { MODUS_ICONS_OUTLINED, ModusIconType } from './modus-icon.models';

@Component({
  tag: 'modus-icon',
  styleUrl: 'modus-icon.scss',
  shadow: true,
})
export class ModusIcon {
  @Element() el: HTMLElement;

  /** (optional) The color of the Icon */
  @Prop() color?: string;

  /** The name of the icon */
  @Prop() name: string | null;

  /** (optional) The size of the Icon */
  @Prop() size?: string = '16';

  /** (optional) The size of the Icon */
  @Prop() type?: ModusIconType = 'solid';

  /** (optional) The click handler function */
  @Event() iconClick?: EventEmitter;

  onClick(event: MouseEvent): void {
    if (event.defaultPrevented) {
      return;
    }
    this.iconClick.emit(event);
  }

  render(): unknown {
    return (
      this.name && (
        <svg
          onClick={this.onClick}
          style={{ width: this.size, height: this.size, color: this.color }}
          fill={this.color ?? 'currentColor'}>
          <use href={`${this.type === MODUS_ICONS_OUTLINED ? outlinedIcons : solidIcons}#${this.name}`}></use>
        </svg>
      )
    );
  }
}
