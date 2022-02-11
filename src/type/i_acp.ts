import type { IVocabulary } from "./i_vocabulary";

/**
 * ACP vocabulary interface
 *
 * > The Access Control Policy Language (ACP) is a language for defining sets of conditions mandating access permissions over resources.
 * > -- https://solid.github.io/authorization-panel/acp-specification/#abstract
 */
export interface IACP extends IVocabulary {
  // Namespace description
  readonly iri: "http://www.w3.org/ns/solid/acp#";
  readonly prefix: "acp";
  readonly version: "2021-10-28";
  // Classes
  /* eslint-disable @typescript-eslint/naming-convention */
  readonly AccessControlResource: "http://www.w3.org/ns/solid/acp#AccessControlResource";
  readonly AccessControl: "http://www.w3.org/ns/solid/acp#AccessControl";
  readonly Policy: "http://www.w3.org/ns/solid/acp#Policy";
  readonly Matcher: "http://www.w3.org/ns/solid/acp#Matcher";
  /* eslint-enable @typescript-eslint/naming-convention */
  // Properties: Resource
  readonly accessControlResource: "http://www.w3.org/ns/solid/acp#accessControlResource";
  // Properties: Access Control Resource
  readonly accessControl: "http://www.w3.org/ns/solid/acp#accessControl";
  readonly memberAccessControl: "http://www.w3.org/ns/solid/acp#memberAccessControl";
  // Properties: Access Control
  readonly apply: "http://www.w3.org/ns/solid/acp#apply";
  // Properties: Policy
  readonly allOf: "http://www.w3.org/ns/solid/acp#allOf";
  readonly anyOf: "http://www.w3.org/ns/solid/acp#anyOf";
  readonly noneOf: "http://www.w3.org/ns/solid/acp#noneOf";
  readonly allow: "http://www.w3.org/ns/solid/acp#allow";
  readonly deny: "http://www.w3.org/ns/solid/acp#deny";
  // Properties: Matchers
  readonly agent: "http://www.w3.org/ns/solid/acp#agent";
  readonly client: "http://www.w3.org/ns/solid/acp#client";
  readonly issuer: "http://www.w3.org/ns/solid/acp#issuer";
  readonly vc: "http://www.w3.org/ns/solid/acp#vc";
  // Named Individuals
  /* eslint-disable @typescript-eslint/naming-convention */
  readonly PublicAgent: "http://www.w3.org/ns/solid/acp#PublicAgent";
  readonly AuthenticatedAgent: "http://www.w3.org/ns/solid/acp#AuthenticatedAgent";
  readonly CreatorAgent: "http://www.w3.org/ns/solid/acp#CreatorAgent";
  readonly OwnerAgent: "http://www.w3.org/ns/solid/acp#OwnerAgent";
  readonly PublicClient: "http://www.w3.org/ns/solid/acp#PublicClient";
  /* eslint-enable @typescript-eslint/naming-convention */
}
