import { blobref } from "../blobs/mod";

/**
 * SHA-256 cryptographic hash function
 */
export namespace sha256 {

  /**
   * The SHA-256 digest of the given payload
   * @param payload 
   */
  // @ts-ignore: decorator
  @external("sha256", "digest")
  export declare function digest(payload: blobref): blobref

}