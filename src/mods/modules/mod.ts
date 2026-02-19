import { blobref } from "../blobs/mod"
import { packref } from "../packs/mod"
import { textref } from "../texts/mod"

/**
 * Modules have an address and can be called by other modules
 */
export namespace modules {

  /**
   * The address of the current module
   */
  // @ts-ignore: decorator
  @external("modules", "self")
  export declare function self(): textref

  /**
   * Get the code of the given module
   * @param module 
   */
  // @ts-ignore: decorator
  @external("modules", "load")
  export declare function load(module: textref): blobref

  /**
   * Call the given method of the given module with the given parameters then return the result in a 1-sized pack
   * @param module 
   * @param method 
   * @param params 
   */
  // @ts-ignore: decorator
  @external("modules", "call")
  export declare function call(module: textref, method: textref, params: packref): packref

  /**
   * Create a new module with the given code and salt then return its address
   * @param code 
   * @param salt 
   */
  // @ts-ignore: decorator
  @external("modules", "create")
  export declare function create<T>(code: blobref, salt: T): textref

}