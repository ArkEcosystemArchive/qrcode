import { flush, render } from '@stencil/core/testing';
import { ArkQRCode } from './ark-qrcode';

describe('ark-qrcode', () => {
  it('should build', () => {
    expect(new ArkQRCode()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [ArkQRCode],
        html: '<ark-qrcode></ark-qrcode>'
      });
    });

    // TODO: stencil testing is not working
    it ('should fail without parameters', async () => {
      await flush(element);
    });
  })
})
