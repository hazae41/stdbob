import { blobref, blobs } from "../mod"

export type textref = externref

/**
 * Texts are external references to strings (e.g. string in JavaScript)
 */
export namespace texts {

  /**
   * The length of the given text
   * @param text 
   */
  // @ts-ignore: decorator
  @external("texts", "length")
  export declare function length(text: textref): i32

  /**
   * Concatenate two texts
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("texts", "concat")
  export declare function concat(left: textref, right: textref): textref

  /**
   * True if left and right are equal
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("texts", "equals")
  export declare function equals(left: textref, right: textref): bool

  /**
   * True if left includes right (at any offset)
   * @param haystack 
   * @param needle 
   */
  // @ts-ignore: decorator
  @external("texts", "includes")
  export declare function includes(haystack: textref, needle: textref): bool

  /**
   * Slice the given text from start (inclusive) to until (exclusive)
   * @param text 
   * @param start 
   * @param until 
   */
  // @ts-ignore: decorator
  @external("texts", "slice")
  export declare function slice(text: textref, start: i32, until: i32): textref

  /**
   * Create a text from a UTF-8 blob
   * @param blob 
   */
  // @ts-ignore: decorator
  @external("texts", "from_utf8")
  export declare function fromUtf8(blob: blobref): textref

  /**
   * Convert a text to a UTF-8 blob
   * @param text 
   */
  // @ts-ignore: decorator
  @external("texts", "to_utf8")
  export declare function toUtf8(text: textref): blobref

  /**
   * Convert the given text to uppercase
   * @param text 
   */
  // @ts-ignore: decorator
  @external("texts", "to_uppercase")
  export declare function toUppercase(text: textref): textref

  /**
   * Convert the given text to lowercase
   * @param text 
   */
  // @ts-ignore: decorator
  @external("texts", "to_lowercase")
  export declare function toLowercase(text: textref): textref

  /**
   * Trim the given text by removing whitespace from both ends
   * @param text 
   */
  // @ts-ignore: decorator
  @external("texts", "trim")
  export declare function trim(text: textref): textref

  /**
   * Create a text from a string
   * @param string 
   * @returns 
   */
  export function fromString(string: string): textref {
    const utf8 = String.UTF8.encode(string)

    const blob = blobs.save(utf8)
    const text = fromUtf8(blob)

    return text
  }

  /**
   * Convert a text to a string
   * @param text 
   * @returns 
   */
  export function toString(text: textref): string {
    const blob = toUtf8(text)
    const utf8 = blobs.load(blob)

    const string = String.UTF8.decode(utf8)

    return string
  }

}