export namespace refs {

  // @ts-ignore: decorator
  @external("refs", "numerize")
  export declare function numerize(ref: externref): i32

  // @ts-ignore: decorator
  @external("refs", "denumerize")
  export declare function denumerize(index: i32): externref

}