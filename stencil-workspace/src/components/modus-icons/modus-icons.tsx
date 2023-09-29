// eslint-disable-next-line
import { Component, h, Prop, Event, Element, EventEmitter } from '@stencil/core';
import { IconMap } from '../icons/IconMap';
import svg from '@trimble-oss/modus-icons/dist/modus-solid/sprites/modus-icons.svg';

@Component({
  tag: 'modus-icon',
  styleUrl: 'modus-icon.scss',
  shadow: true,
})
export class ModusIcon {
  @Element() el: HTMLElement;
  /** The name of the icon */
  @Prop() name: string | null;

  /** (optional) The click handler function */
  @Event() iconClick?: EventEmitter;

  /** (optional) The size of the Icon */
  @Prop() size?: string = '16';

  /** (optional) The color of the Icon */
  @Prop() color?: string;

  onClick(event: MouseEvent): void {
    if (event.defaultPrevented) {
      return;
    }
    this.iconClick.emit(event);
  }

  componentWillLoad(): void {
    this.el.style.setProperty('--modus-icon', `var(--modus-${this.name})`);
  }

  render(): unknown {
    return (
      <div class="modus-icons">
        <svg style={{ width: this.size, height: this.size, color: this.color }} fill={this.color ?? 'currentColor'}>
          <use href={`${svg}#${this.name}`}></use>
        </svg>
      </div>
    );
  }
}
