import { textref } from "../texts/mod"

export type blobref = externref

/**
 * Blobs are external references to bytes (e.g. Uint8Array in JavaScript)
 */
export namespace blobs {

  // @ts-ignore: decorator
  @external("blobs", "save")
  declare function $save(offset: i32, length: i32): blobref

  // @ts-ignore: decorator
  @external("blobs", "load")
  declare function $load(blob: blobref, offset: i32): void

  /**
   * Save the given buffer into a blob
   * @param buffer 
   * @returns 
   */
  export function save(buffer: ArrayBuffer): blobref {
    const bytes = Uint8Array.wrap(buffer)

    const reference = $save(<i32>bytes.dataStart, bytes.byteLength)

    return reference
  }

  /**
   * Load the given blob into a buffer
   * @param blob 
   * @returns 
   */
  export function load(blob: blobref): ArrayBuffer {
    const bytes = new Uint8Array(length(blob))

    $load(blob, <i32>bytes.dataStart)

    return bytes.buffer
  }

  /**
   * The length of the given blob
   * @param blob 
   */
  // @ts-ignore: decorator
  @external("blobs", "length")
  export declare function length(blob: blobref): i32

  /**
   * Concatenate two blobs
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("blobs", "concat")
  export declare function concat(left: blobref, right: blobref): blobref

  /**
   * True if left and right have the same data
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("blobs", "equals")
  export declare function equals(left: blobref, right: blobref): bool

  /**
   * True if the data in haystack contains the data in needle (at any offset)
   * @param haystack 
   * @param needle 
   */
  // @ts-ignore: decorator
  @external("blobs", "includes")
  export declare function includes(haystack: blobref, needle: blobref): bool

  /**
   * Slice the given blob from start (inclusive) to until (exclusive)
   * @param blob 
   * @param start 
   * @param until 
   */
  // @ts-ignore: decorator
  @external("blobs", "slice")
  export declare function slice(blob: blobref, start: i32, until: i32): blobref

  /**
   * Create a blob from a base-16 string
   * @param text 
   */
  // @ts-ignore: decorator
  @external("blobs", "from_base16")
  export declare function fromBase16(text: textref): blobref

  /**
   * Convert a blob to a base-16 string
   * @param blob 
   */
  // @ts-ignore: decorator
  @external("blobs", "to_base16")
  export declare function toBase16(blob: blobref): textref

  /**
   * Create a blob from a base-64 string
   * @param text 
   */
  // @ts-ignore: decorator
  @external("blobs", "from_base64")
  export declare function fromBase64(text: textref): blobref

  /**
   * Convert a blob to a base-64 string
   * @param blob 
   */
  // @ts-ignore: decorator
  @external("blobs", "to_base64")
  export declare function toBase64(blob: blobref): textref

  /**
   * Encode the given value into a blob
   * @param value 
   */
  // @ts-ignore: decorator
  @external("blobs", "encode")
  export declare function encode<T>(value: T): blobref

  /**
   * Decode the given blob into a value of type T (assuming it was encoded from a value of type T)
   * @param blob 
   */
  // @ts-ignore: decorator
  @external("blobs", "decode")
  export declare function decode<T>(blob: blobref): T

}