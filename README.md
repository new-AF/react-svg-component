# React <SVG\/> component

v1.3

Easily load SVG files during runtime, and by default their `fill` will match the current color of context.

(Matching `stroke` is also supported)

## Usage example

```jsx
<SVG path="/sun-solid.svg" />
```

## Mandatory Props:

| **Prop name** | **expected type** | **description**                   |
| ------------- | ----------------- | --------------------------------- |
| "path"        | string            | path to the svg file to be loaded |

## Optional Props

| **Prop name** | **expected type** | **default value** | **description**                                                        |
| ------------- | ----------------- | ----------------- | ---------------------------------------------------------------------- |
| "set-fill"    | boolean           | `true`            | sets fill="currentColor" attribute value pair on the DOM svg element   |
| "set-stroke"  | boolean           | `false`           | sets stroke="currentColor" attribute value pair on the DOM svg element |
