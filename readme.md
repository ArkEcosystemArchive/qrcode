# ARK QR Code

A web component to generate QR codes for ARK payments.

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Install

### Script tag

- Put this script tag `<script src='https://unpkg.com/ark-qrcode@latest/dist/ark-qrcode.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install ark-qrcode --save`
- Put this script tag `<script src='node_modules/ark-qrcode/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install ark-qrcode --save`
- Add `{ name: 'ark-qrcode' }` to your `collections`.
- Then you can use the element anywhere in your template, JSX, html etc

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

![ARK](data:image/png;base64,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)

## Properties

This package complies with the specifications described in [AIP-13](https://github.com/ArkEcosystem/AIPs/blob/master/AIPS/aip-13.md).

| Attribute | Description | Type | Required |
| --- | --- | --- | --- |
| address | Ark recipient address encoded in Base58. | String | Yes |
| amount | Amount in ARK (Ѧ) or DARK (DѦ). | Number | No |
| label | Recipient label string. | String | No |
| size | Size of the QR code (pixels) | Number | No |
| show-logo | Display the ARK logo in QR code | Boolean | No |
| vendor-field | Vendor field string (encoded URI). | String | No |

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

## Authors

- Lúcio Rubens <lucio@ark.io>

## License

ARK QRCode is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.