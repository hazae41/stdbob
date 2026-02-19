import { textref } from "../mod"

/**
 * Execution environment
 */
export namespace env {

  /**
   * 1 = execution, 2 = simulation
   */
  // @ts-ignore: decorator
  @external("env", "mode")
  export declare const mode: i32

  /**
   * The environment UUID (aka chain ID)
   */
  // @ts-ignore: decorator
  @external("env", "uuid")
  export declare function uuid(): textref

  /**
   * Stop execution with the given message
   * @param message 
   */
  // @ts-ignore: decorator
  @external("env", "panic")
  export declare function panic<T>(message: textref): T

}