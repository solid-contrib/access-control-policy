import type { IVocabulary } from "./i_vocabulary";

/**
 * ACL vocabulary interface
 *
 * > ACLs are designed to express access rules in a logical, unambiguous, machine-accessible format. A client with ACL data should be able to prove access privileges.
 * > -- https://www.w3.org/2001/04/20-ACLs
 */
export interface IACL extends IVocabulary {
  // Namespace description
  readonly iri: "http://www.w3.org/ns/auth/acl#";
  readonly prefix: "acl";
  readonly version: "2001-04-20";
  // Classes
  /* eslint-disable @typescript-eslint/naming-convention */
  readonly Read: "http://www.w3.org/ns/auth/acl#Read";
  readonly Write: "http://www.w3.org/ns/auth/acl#Write";
  readonly Append: "http://www.w3.org/ns/auth/acl#Append";
  readonly Control: "http://www.w3.org/ns/auth/acl#Control";
  /* eslint-enable @typescript-eslint/naming-convention */
}
