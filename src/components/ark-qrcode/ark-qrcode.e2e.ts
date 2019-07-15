import { newE2EPage, E2EPage } from "@stencil/core/testing";

describe("ark-qrcode", () => {
  it("renders", async () => {
    const page: E2EPage = await newE2EPage();

    await page.setContent("<ark-qrcode></ark-qrcode>");
    const element = await page.find("ark-qrcode");
    expect(element).toHaveClass("hydrated");
  });

  it("renders without params", async () => {
    const page = await newE2EPage();

    await page.setContent("<ark-qrcode></ark-qrcode>");
    const element = await page.find("ark-qrcode >>> div");
    expect(element.innerHTML).toEqual("<canvas></canvas>");
  });

  it("renders with an address", async () => {
    const page = await newE2EPage();

    await page.setContent("<ark-qrcode></ark-qrcode>");
    const component = await page.find("ark-qrcode");
    const element = await page.find("ark-qrcode >>> div");
    expect(element.innerHTML).toEqual("<canvas></canvas>");

    component.setProperty("address", "DLteVA8j6B5DLpFp2Z3XSw1ENGXMjtFQsf");
    await page.waitForChanges();
    expect(element.innerHTML).toEqual(
      '<canvas height="100" width="100"></canvas>'
    );
  });

  it("renders with a vendor-field without special characters", async () => {
    const page = await newE2EPage();

    await page.setContent("<ark-qrcode></ark-qrcode>");
    const component = await page.find("ark-qrcode");
    const element = await page.find("ark-qrcode >>> div");
    expect(element.innerHTML).toEqual("<canvas></canvas>");

    component.setProperty("vendorField", "Hello");
    await page.waitForChanges();
    expect(element.innerHTML).toEqual(
      '<canvas height="100" width="100"></canvas>'
    );
  });

  it("renders with a vendor-field with special characters", async () => {
    const page = await newE2EPage();

    await page.setContent("<ark-qrcode></ark-qrcode>");
    const component = await page.find("ark-qrcode");
    const element = await page.find("ark-qrcode >>> div");
    expect(element.innerHTML).toEqual("<canvas></canvas>");

    component.setProperty("vendorField", "Hello%20Ark!");
    await page.waitForChanges();
    expect(element.innerHTML).toEqual(
      '<canvas height="100" width="100"></canvas>'
    );
  });
});
