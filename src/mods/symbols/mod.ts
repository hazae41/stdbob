export type symbolref = externref

export namespace symbols {

  // @ts-ignore: decorator
  @external("symbols", "create")
  export declare function create(): symbolref

}