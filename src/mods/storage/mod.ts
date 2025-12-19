import { packref, textref } from "../mod";

export namespace storage {

  // @ts-ignore: decorator
  @external("storage", "get")
  export declare function get(key: textref): packref

  // @ts-ignore: decorator
  @external("storage", "set")
  export declare function set<T>(key: textref, value: T): void

}