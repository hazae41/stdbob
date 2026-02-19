
export type packref = externref

/**
 * Packs are external references to tuples of values (e.g. arrays in JavaScript)
 */
export namespace packs {

  /**
   * Concatenate two packs (e.g. [...left, ...right] in JavaScript)
   * @param left 
   * @param right 
   */
  // @ts-ignore: decorator
  @external("packs", "concat")
  export declare function concat(left: packref, right: packref): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create1<A>(arg0: A): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create2<A, B>(arg0: A, arg1: B): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create3<A, B, C>(arg0: A, arg1: B, arg2: C): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create4<A, B, C, D>(arg0: A, arg1: B, arg2: C, arg3: D): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create5<A, B, C, D, E>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create6<A, B, C, D, E, F>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create7<A, B, C, D, E, F, G>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create8<A, B, C, D, E, F, G, H>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H): packref

  /**
   * Create a new pack with the given arguments
   * @param arg0 
   */
  // @ts-ignore: decorator
  @external("packs", "create")
  export declare function create9<A, B, C, D, E, F, G, H, I>(arg0: A, arg1: B, arg2: C, arg3: D, arg4: E, arg5: F, arg6: G, arg7: H, arg8: I): packref

  /**
   * Get the length of the given pack
   * @param pack 
   */
  // @ts-ignore: decorator: decorator
  @external("packs", "length")
  export declare function length(pack: packref): i32

  /**
   * Get the value at the given index in the given pack (throw if not found)
   * @param pack 
   * @param index 
   */
  // @ts-ignore: decorator
  @external("packs", "get")
  export declare function get<T>(pack: packref, index: i32): T

}