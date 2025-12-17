import { blobref, blobs } from "../mod";

export type textref = externref

export namespace texts {

  export function from(string: string): textref {
    const utf8 = String.UTF8.encode(string)

    const blob = blobs.save(utf8)
    const text = fromUtf8(blob)

    return text
  }

  // @ts-ignore: decorator
  @external("texts", "length")
  export declare function length(text: textref): i32

  // @ts-ignore: decorator
  @external("texts", "concat")
  export declare function concat(left: textref, right: textref): textref

  // @ts-ignore: decorator
  @external("texts", "equals")
  export declare function equals(left: textref, right: textref): bool

  // @ts-ignore: decorator
  @external("texts", "includes")
  export declare function includes(haystack: textref, needle: textref): bool

  // @ts-ignore: decorator
  @external("texts", "slice")
  export declare function slice(text: textref, start: i32, until: i32): textref

  // @ts-ignore: decorator
  @external("texts", "from_utf8")
  export declare function fromUtf8(blob: blobref): textref

  // @ts-ignore: decorator
  @external("texts", "to_utf8")
  export declare function toUtf8(text: textref): blobref

  // @ts-ignore: decorator
  @external("texts", "to_uppercase")
  export declare function toUppercase(text: textref): textref

  // @ts-ignore: decorator
  @external("texts", "to_lowercase")
  export declare function toLowercase(text: textref): textref

  // @ts-ignore: decorator
  @external("texts", "trim")
  export declare function trim(text: textref): textref

}