export type symbolref = externref

/**
 * Symbols are unique external references (e.g. Symbol in JavaScript)
 */
export namespace symbols {

  /**
   * Create a new unique symbol
   */
  // @ts-ignore: decorator
  @external("symbols", "create")
  export declare function create(): symbolref

}