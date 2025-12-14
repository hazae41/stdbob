export namespace refs {

  // @ts-ignore: decorator
  @external("refs", "numerize")
  export declare function numerize(ref: externref): usize

  // @ts-ignore: decorator
  @external("refs", "denumerize")
  export declare function denumerize(index: usize): externref

}