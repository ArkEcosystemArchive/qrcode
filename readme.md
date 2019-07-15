![](https://user-images.githubusercontent.com/4539235/35275160-96fc3da0-001d-11e8-9908-e43d0e40bac9.png)

# ARK QR Code

> A web component to generate QR codes for ARK payments.

[![Latest Version](https://badgen.now.sh/npm/v/ark-qrcode)](https://www.npmjs.com/package/ark-qrcode)
[![Node Engine](https://badgen.now.sh/npm/node/ark-qrcode)](https://www.npmjs.com/package/ark-qrcode)
[![Build Status](https://badgen.now.sh/circleci/github/ArkEcosystem/qrcode)](https://circleci.com/gh/ArkEcosystem/qrcode)
[![Codecov](https://badgen.now.sh/codecov/c/github/ArkEcosystem/qrcode)](https://codecov.io/gh/ArkEcosystem/qrcode)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

## Install

### Script tag

- Put this script tag `<script src='https://unpkg.com/ark-qrcode@latest/dist/arkqrcode.js'></script>` in the head of your index.html

### Node Modules

- Run `npm install ark-qrcode --save`
- Put this script tag `<script src='node_modules/ark-qrcode/dist/arkqrcode.js'></script>` in the head of your index.html

### In a stencil-starter app

- Run `npm install ark-qrcode --save`
- Add `{ name: 'ark-qrcode' }` to your `collections`.

## Usage

Insert the element in your code and enter your custom properties:

```html
<ark-qrcode address="DE6os4N86ef9bba6kVGurqxmhpBHKctoxY" amount="20.3"></ark-qrcode>
```

## Examples

```html
<body>
<ark-qrcode address="DE6os4N86ef9bba6kVGurqxmhpBHKctoxY" amount="10.5" vendor-field="Hello%20Ark!" size="200" show-logo="true">
<script>
  document.querySelector('ark-qrcode').getURI();
  // => ark:DE6os4N86ef9bba6kVGurqxmhpBHKctoxY?amount=10.5&vendorField=Hello%20Ark!
</script>
</body>
```

Generate this QR code:

<img src="https://i.imgur.com/VEGA4gO.png" width="15%">

## Properties

This package complies with the specifications described in [AIP-13](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-13.md).

| Attribute    | Description                              | Type    | Required |
| ------------ | ---------------------------------------- | ------- | -------- |
| address      | Ark recipient address encoded in Base58. | String  | Yes      |
| amount       | Amount in ARK (Ѧ) or DARK (DѦ).          | Number  | No       |
| label        | Recipient label string.                  | String  | No       |
| size         | Size of the QR code (pixels)             | Number  | No       |
| show-logo    | Display the ARK logo in QR code          | Boolean | No       |
| vendor-field | Vendor field string (encoded URI).       | String  | No       |

## Methods

You can interact with the component data using the methods below:

### `getURI()`

Format the properties entered to the [ARK URI scheme](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-13.md#simpler-syntax).

```javascript
document.querySelector('ark-qrcode').getURI();
// => ark:DE6os4N86ef9bba6kVGurqxmhpBHKctoxY?amount=20.3
```

### `getDataURL([mime])`

Generates a base64 encoded data URI for the QR code.

```javascript
document.querySelector('ark-qrcode').getDataURL();
// => data:image/png;base64,iVBORw0KGgoAAAANSUhE...n6ofvMC4I9AAAAAElFTkSuQmCC
```

### `validateURI(uri)`

Validate an URI string.

```javascript
const uri = 'ark:DE6os4N86ef9bba6kVGurqxmhpBHKctoxY?amount=10.5';
document.querySelector('ark-qrcode').validateURI(uri);
// => ["ark:DE6os4N86ef9bba6kVGurqxmhpBHKctoxY?amount=10.5", "DE6os4N86ef9bba6kVGurqxmhpBHKctoxY", "?amount=10.5"]
```

### `deserializeURI(uri)`

Deserialize the URI scheme to a JSON object.

```javascript
const uri = 'ark:DE6os4N86ef9bba6kVGurqxmhpBHKctoxY?amount=10.5&vendorField=Hello%20Ark!';
document.querySelector('ark-qrcode').deserializeURI(uri);
// => { address: 'DE6os4N86ef9bba6kVGurqxmhpBHKctoxY', amount: 10.5, label: null, vendorField: 'Hello Ark!' }
```

### `fromObject(obj)`

Instantiate a URI from an Object.

```javascript
const obj = { address: DE6os4N86ef9bba6kVGurqxmhpBHKctoxY, amount: 10.5 };
const element = document.querySelector('ark-qrcode').fromObject(obj);
// => <ark-qrcode address="DE6os4N86ef9bba6kVGurqxmhpBHKctoxY" amount="10.5">
```

## Security

If you discover a security vulnerability within this project, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Authors

- Lúcio Rubens <lucio@ark.io>

## License

ARK QRCode is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
