/// <reference types="remark-parse" />
/// <reference types="remark-stringify" />

import type { Data, Settings } from 'unified'
import type { Options as ToMarkdownExtension } from 'mdast-util-to-markdown'
import type { Extension as MicromarkExtension } from 'micromark-util-types'
import type { Extension as FromMarkdownExtension } from 'mdast-util-from-markdown'

export function add(
  data: Data,
  field: 'toMarkdownExtensions',
  value: ToMarkdownExtension
): void
export function add(
  data: Data,
  field: 'micromarkExtensions',
  value: MicromarkExtension
): void
export function add(
  data: Data,
  field: 'fromMarkdownExtensions',
  value: FromMarkdownExtension | FromMarkdownExtension[]
): void
export function add(
  data: Data,
  field:
    | 'micromarkExtensions'
    | 'fromMarkdownExtensions'
    | 'toMarkdownExtensions',
  value:
    | ToMarkdownExtension
    | MicromarkExtension
    | FromMarkdownExtension
    | FromMarkdownExtension[]
): void {
  if(Array.isArray(value)) {
    data.fromMarkdownExtensions ??= []
    data.fromMarkdownExtensions.push(value)
    return
  }
  if (data[field]) data[field].push(value)
  else data[field] = [value]
}
