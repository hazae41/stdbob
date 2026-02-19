/**
 * Convert between externrefs and local i32 indices (for use in data structures)
 */
export namespace refs {

  /**
   * Convert an externref to an i32 index
   * @param ref 
   */
  // @ts-ignore: decorator
  @external("refs", "numerize")
  export declare function numerize(ref: externref): i32

  /**
   * Convert an i32 index back to an externref
   * @param index 
   */
  // @ts-ignore: decorator
  @external("refs", "denumerize")
  export declare function denumerize(index: i32): externref

}