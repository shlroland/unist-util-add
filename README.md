> This document is created by ChatGPT.

# unist-util-add

`unist-util-add` is a utility for enhancing the [unist](https://github.com/syntax-tree/unist) ecosystem by providing an easy way to add extensions for `toMarkdown`, `micromark`, and `fromMarkdown` to unified data objects. It simplifies working with markdown processing libraries like [remark](https://github.com/remarkjs/remark) and [micromark](https://github.com/micromark/micromark) by offering a straightforward API to add plugins.

## Installation

You can install `unist-util-add` using npm or yarn:

```bash
npm install unist-util-add

yarn add unist-util-add

pnpm add unist-util-add
```

## Usage

Here's how you can use the `add` function provided by `unist-util-add` to augment your unist data with extensions:

```js
import { add } from 'unist-util-add'
import type { Data } from 'unified'
import type { Options as ToMarkdownExtension } from 'mdast-util-to-markdown'
import type { Extension as MicromarkExtension } from 'micromark-util-types'
import type { Extension as FromMarkdownExtension } from 'mdast-util-from-markdown'

// Example data object
const data: Data = {}

// Example extensions
const toMarkdownExt: ToMarkdownExtension = {/* your toMarkdown extension */}
const micromarkExt: MicromarkExtension = {/* your micromark extension */}
const fromMarkdownExt: FromMarkdownExtension = {/* your fromMarkdown extension */}

// Add extensions to data
add(data, 'toMarkdownExtensions', toMarkdownExt)
add(data, 'micromarkExtensions', micromarkExt)
add(data, 'fromMarkdownExtensions', fromMarkdownExt)
```

## API

### `add(data: Data, field: string, value: Extension): void`

The `add` function allows you to add extensions to a unist data object.

#### Parameters

- **`data`**: The unist data object where the extension should be added.
- **`field`**: A string representing the field name, which can be one of `'toMarkdownExtensions'`, `'micromarkExtensions'`, or `'fromMarkdownExtensions'`.
- **`value`**: The extension to add, which can be a `ToMarkdownExtension`, `MicromarkExtension`, `FromMarkdownExtension`, or an array of `FromMarkdownExtension`.

#### Supported Fields

- **`toMarkdownExtensions`**: Extensions that modify the markdown-to-markdown transformation process.
- **`micromarkExtensions`**: Extensions that modify the micromark parsing process.
- **`fromMarkdownExtensions`**: Extensions that modify the markdown-to-unist tree transformation process.

## How It Works

The `add` function checks if the provided `field` already exists in the `data` object. If it does, it pushes the new `value` onto the existing array. If the `field` does not exist, it creates a new array with the `value` as its first item.

For the `fromMarkdownExtensions`, if an array of extensions is provided, it appends the entire array to the existing list of extensions.

## Why Use unist-util-add?

- **Simplifies Plugin Management**: Easily manage extensions by providing a unified API for different types of extensions.
- **Improves Readability**: Makes your codebase cleaner by reducing the boilerplate required to manage unist data fields.
- **Flexible**: Supports adding multiple types of extensions in a consistent manner.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/yourusername/unist-util-add).

## License

`unist-util-add` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.