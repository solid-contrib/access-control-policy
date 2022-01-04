import type { IACL } from "../type/i_acl";

export const ACL: IACL = {
  iri: "http://www.w3.org/ns/auth/acl#",
  prefix: "acl",
  version: "2001-04-20",
  /* eslint-disable @typescript-eslint/naming-convention */
  Read: "http://www.w3.org/ns/auth/acl#Read",
  Write: "http://www.w3.org/ns/auth/acl#Write",
  Append: "http://www.w3.org/ns/auth/acl#Append",
  Control: "http://www.w3.org/ns/auth/acl#Control",
  /* eslint-enable @typescript-eslint/naming-convention */
};
