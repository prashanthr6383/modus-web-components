import { newE2EPage } from '@stencil/core/testing';

describe('modus-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<modus-icon></modus-icon>');
    const element = await page.find('modus-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the color prop', async () => {
    const page = await newE2EPage();

    await page.setContent('<modus-icon name="alert"></modus-icon>');
    const component = await page.find('modus-icon');
    let element = await page.find('modus-icon >>> svg');
    expect(element).toBeDefined();

    component.setProperty('color', 'blue');
    await page.waitForChanges();
    element = await page.find('modus-icon >>> svg');
    expect(await element.getAttribute('fill')).toEqual('blue');
  });
});
