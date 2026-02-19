import { packref, textref } from "../mod";

/**
 * Persistent public key-value storage
 */
export namespace storage {

  /**
   * Get the value associated with the given key in a 1-sized pack or null if not found
   * @param key 
   */
  // @ts-ignore: decorator
  @external("storage", "get")
  export declare function get(key: textref): packref

  /**
   * Set the value associated with the given key
   * @param key 
   * @param value 
   */
  // @ts-ignore: decorator
  @external("storage", "set")
  export declare function set<T>(key: textref, value: T): void

}