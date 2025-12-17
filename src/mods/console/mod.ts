import { textref } from "../mod";

export namespace console {

  // @ts-ignore: decorator
  @external("console", "log")
  export declare function log(message: textref): void

}