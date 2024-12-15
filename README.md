# React <SVG\/> component

v1.3

![screenshot image of an <SVG/> component in action on by blog](./example.png)

Easily load SVG files during runtime, and by default their `fill` will match the current color of context.

(Matching `stroke` is also supported)

# Table of contents

-   [Limitations](#limitations)
-   [Usage example](#usage-example)
-   [Mandatory Props](#mandatory-props)
-   [Optional Props](#optional-props)
-   [Backstory](#backstory)

## Limitations

Due to the async nature of reading the SVG files during runtime, there is a noticeable lag between when the time the browser first loads the page and the subsequent separate loading of the SVG file.

## Usage example

```jsx
<SVG path="/sun-solid.svg" />
```

## Mandatory Props

| **Prop name** | **expected type** | **description**                   |
| ------------- | ----------------- | --------------------------------- |
| "path"        | string            | path to the svg file to be loaded |

## Optional Props

| **Prop name** | **expected type** | **default value** | **description**                                                        |
| ------------- | ----------------- | ----------------- | ---------------------------------------------------------------------- |
| "set-fill"    | boolean           | `true`            | sets fill="currentColor" attribute value pair on the DOM svg element   |
| "set-stroke"  | boolean           | `false`           | sets stroke="currentColor" attribute value pair on the DOM svg element |

## Backstory

I wanted an easier and more sustainable way of embedding SVG icons in my github page, and most important making them match whatever the inherited or set `color` property was.

The browser is doing all the heavylifting here because the trick is to set `fill=currentColor` on the DOM element when the svg element was loaded.

This can be done manually by editing the SVG file and adding the attribute name value directly, however that does not scale for multiple files, is cumbersome and error prone, so enjoy this component.

For an overview what the component does you can read it over my blog [https://new-af.github.io/posts/dynamic-svg-component-react#overview](https://new-af.github.io/posts/dynamic-svg-component-react#overview)
