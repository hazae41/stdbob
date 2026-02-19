import { blobref } from "../blobs/mod";

/**
 * Ed25519 elliptic curve digital signature algorithm
 */
export namespace ed25519 {

  /**
   * Verify that the given signature is valid for the given payload and public key
   * @param pubkey 
   * @param signature 
   * @param payload 
   */
  // @ts-ignore: decorator
  @external("ed25519", "verify")
  export declare function verify(pubkey: blobref, signature: blobref, payload: blobref): bool

}