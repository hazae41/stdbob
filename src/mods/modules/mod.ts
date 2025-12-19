import { blobref } from "../blobs/mod"
import { packref } from "../packs/mod"
import { textref } from "../texts/mod"

export namespace modules {

  // @ts-ignore: decorator
  @external("modules", "self")
  export declare function self(): textref

  // @ts-ignore: decorator
  @external("modules", "load")
  export declare function load(module: textref): blobref

  // @ts-ignore: decorator
  @external("modules", "call")
  export declare function call(module: textref, method: textref, params: packref): packref

  // @ts-ignore: decorator
  @external("modules", "create")
  export declare function create<T>(code: blobref, salt: T): textref

}