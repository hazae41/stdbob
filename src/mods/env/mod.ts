import { textref } from "../mod"

export namespace env {

  // @ts-ignore: decorator
  @external("env", "mode")
  export declare const mode: i32

  // @ts-ignore: decorator
  @external("env", "uuid")
  export declare function uuid(): textref

  // @ts-ignore: decorator
  @external("env", "panic")
  export declare function panic<T>(message: textref): T

}