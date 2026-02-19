import { textref } from "../mod";

/**
 * Log messages to the console
 */
export namespace console {

  /**
   * Log the given message to the console
   * @param message 
   */
  // @ts-ignore: decorator
  @external("console", "log")
  export declare function log(message: textref): void

}