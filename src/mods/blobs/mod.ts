import { textref } from "../texts/mod"

export type blobref = externref

export namespace blobs {

  // @ts-ignore: decorator
  @external("blobs", "save")
  export declare function $save(offset: i32, length: i32): blobref

  // @ts-ignore: decorator
  @external("blobs", "load")
  export declare function $load(blob: blobref, offset: i32): void

  export function save(buffer: ArrayBuffer): blobref {
    const bytes = Uint8Array.wrap(buffer)

    const reference = $save(<i32>bytes.dataStart, bytes.byteLength)

    return reference
  }

  export function load(blob: blobref): ArrayBuffer {
    const bytes = new Uint8Array(length(blob))

    $load(blob, bytes.dataStart)

    return bytes.buffer
  }

  // @ts-ignore: decorator
  @external("blobs", "length")
  export declare function length(blob: blobref): i32

  // @ts-ignore: decorator
  @external("blobs", "concat")
  export declare function concat(left: blobref, right: blobref): blobref

  // @ts-ignore: decorator
  @external("blobs", "equals")
  export declare function equals(left: blobref, right: blobref): bool

  // @ts-ignore: decorator
  @external("blobs", "includes")
  export declare function includes(haystack: blobref, needle: blobref): bool

  // @ts-ignore: decorator
  @external("blobs", "slice")
  export declare function slice(blob: blobref, start: i32, until: i32): blobref

  // @ts-ignore: decorator
  @external("blobs", "from_base16")
  export declare function fromBase16(text: textref): blobref

  // @ts-ignore: decorator
  @external("blobs", "to_base16")
  export declare function toBase16(blob: blobref): textref

  // @ts-ignore: decorator
  @external("blobs", "from_base64")
  export declare function fromBase64(text: textref): blobref

  // @ts-ignore: decorator
  @external("blobs", "to_base64")
  export declare function toBase64(blob: blobref): textref

}