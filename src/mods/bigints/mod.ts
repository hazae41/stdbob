import { textref } from "../texts/mod"

export type bigintref = externref

/**
 * BigInts are external references to arbitrary-precision negatable integers (e.g. BigInt in JavaScript)
 */
export namespace bigints {

  /**
   * 0n
   */
  // @ts-ignore: decorator
  @external("bigints", "zero")
  export declare function zero(): bigintref

  /**
   * 1n
   */
  // @ts-ignore: decorator
  @external("bigints", "one")
  export declare function one(): bigintref

  /**
   * 2n
   */
  // @ts-ignore: decorator
  @external("bigints", "two")
  export declare function two(): bigintref

  /**
   * 3n
   */
  // @ts-ignore: decorator
  @external("bigints", "three")
  export declare function three(): bigintref

  /**
   * 4n
   */
  // @ts-ignore: decorator
  @external("bigints", "four")
  export declare function four(): bigintref

  /**
   * 5n
   */
  // @ts-ignore: decorator
  @external("bigints", "five")
  export declare function five(): bigintref

  /**
   * 6n
   */
  // @ts-ignore: decorator
  @external("bigints", "six")
  export declare function six(): bigintref

  /**
   * 7n
   */
  // @ts-ignore: decorator
  @external("bigints", "seven")
  export declare function seven(): bigintref

  /**
   * 8n
   */
  // @ts-ignore: decorator
  @external("bigints", "eight")
  export declare function eight(): bigintref

  /**
   * 9n
   */
  // @ts-ignore: decorator
  @external("bigints", "nine")
  export declare function nine(): bigintref

  /**
   * 10n
   */
  // @ts-ignore: decorator
  @external("bigints", "ten")
  export declare function ten(): bigintref

  /**
   * Increment a bigint by 1n
   * @param value
   */
  // @ts-ignore: decorator
  @external("bigints", "inc")
  export declare function inc(value: bigintref): bigintref

  /**
   * Decrement a bigint by 1n
   * @param value 
   */
  // @ts-ignore: decorator
  @external("bigints", "dec")
  export declare function dec(value: bigintref): bigintref

  /**
   * Negate a bigint
   * @param value 
   */
  // @ts-ignore: decorator
  @external("bigints", "neg")
  export declare function neg(value: bigintref): bigintref

  /**
   * Add left and right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "add")
  export declare function add(left: bigintref, right: bigintref): bigintref

  /**
   * Subtract right from left
   * @param left
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "sub")
  export declare function sub(left: bigintref, right: bigintref): bigintref

  /**
   * Multiply left by right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "mul")
  export declare function mul(left: bigintref, right: bigintref): bigintref

  /**
   * Divide left by right (throw if right is zero)
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "div")
  export declare function div(left: bigintref, right: bigintref): bigintref

  /**
   * Raise left to the power of right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "pow")
  export declare function pow(left: bigintref, right: bigintref): bigintref

  /**
   * Remainder of left divided by right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "mod")
  export declare function mod(left: bigintref, right: bigintref): bigintref

  /**
   * True if left is less than right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "lt")
  export declare function lt(left: bigintref, right: bigintref): bool

  /**
   * True if left is less than or equal to right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "lte")
  export declare function lte(left: bigintref, right: bigintref): bool

  /**
   * True if left is greater than right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "gt")
  export declare function gt(left: bigintref, right: bigintref): bool

  /**
   * True if left is greater than or equal to right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "gte")
  export declare function gte(left: bigintref, right: bigintref): bool

  /**
   * True if left is equal to right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "eq")
  export declare function eq(left: bigintref, right: bigintref): bool

  /**
   * True if left is not equal to right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "neq")
  export declare function neq(left: bigintref, right: bigintref): bool

  /**
   * The smaller of left and right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "min")
  export declare function min(left: bigintref, right: bigintref): bigintref

  /**
   * The larger of left and right
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("bigints", "max")
  export declare function max(left: bigintref, right: bigintref): bigintref

  /**
   * Create a bigint from a base-16 string
   * @param text 
   */
  // @ts-ignore: decorator
  @external("bigints", "from_base16")
  export declare function fromBase16(text: textref): bigintref

  /**
   * Convert a bigint to a base-16 string
   * @param bigint 
   */
  // @ts-ignore: decorator
  @external("bigints", "to_base16")
  export declare function toBase16(bigint: bigintref): textref

  /**
   * Create a bigint from a base-10 string
   * @param text 
   */
  // @ts-ignore: decorator
  @external("bigints", "from_base10")
  export declare function fromBase10(text: textref): bigintref

  /**
   * Convert a bigint to a base-10 string
   * @param bigint 
   */
  // @ts-ignore: decorator
  @external("bigints", "to_base10")
  export declare function toBase10(bigint: bigintref): textref

  /**
   * Create a bigint from a 64-bit integer
   * @param bigint 
   */
  // @ts-ignore: decorator
  @external("bigints", "identity")
  export declare function fromInt64(bigint: i64): bigintref

  /**
   * Convert a bigint to a 64-bit integer
   * @param bigint 
   */
  // @ts-ignore: decorator
  @external("bigints", "identity")
  export declare function toInt64(bigint: bigintref): i64

}