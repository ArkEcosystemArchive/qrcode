# ark-qrcode



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default     |
| ------------- | -------------- | ----------- | --------- | ----------- |
| `address`     | `address`      |             | `string`  | `undefined` |
| `amount`      | `amount`       |             | `number`  | `undefined` |
| `label`       | `label`        |             | `string`  | `undefined` |
| `showLogo`    | `show-logo`    |             | `boolean` | `false`     |
| `size`        | `size`         |             | `number`  | `100`       |
| `vendorField` | `vendor-field` |             | `string`  | `undefined` |


## Methods

### `deserializeURI(uri: string) => Promise<{ address: any; amount: any; label: any; vendorField: any; }>`



#### Returns

Type: `Promise<{ address: any; amount: any; label: any; vendorField: any; }>`



### `fromObject(data: any) => Promise<HTMLElement>`



#### Returns

Type: `Promise<HTMLElement>`



### `getDataURL(mime?: string) => Promise<string>`



#### Returns

Type: `Promise<string>`



### `getURI() => Promise<string>`



#### Returns

Type: `Promise<string>`



### `validateURI(uri: string) => Promise<RegExpExecArray>`



#### Returns

Type: `Promise<RegExpExecArray>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
