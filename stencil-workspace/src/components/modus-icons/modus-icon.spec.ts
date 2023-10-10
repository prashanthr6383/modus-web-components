import { newSpecPage } from '@stencil/core/testing';
import { ModusIcon } from './modus-icon';

describe('modus-icon', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModusIcon],
      html: '<modus-icon name="alert"></modus-icon>',
    });

    const svg = root.shadowRoot.querySelector('svg');
    expect(svg).toBeTruthy();
  });
});
