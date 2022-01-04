import type { IACP } from "../type/i_acp";

export const ACP: IACP = {
  iri: "http://www.w3.org/ns/solid/acp#",
  prefix: "acp",
  version: "2021-10-28",
  /* eslint-disable @typescript-eslint/naming-convention */
  AccessControlResource: "http://www.w3.org/ns/solid/acp#AccessControlResource",
  AccessControl: "http://www.w3.org/ns/solid/acp#AccessControl",
  Policy: "http://www.w3.org/ns/solid/acp#Policy",
  Matcher: "http://www.w3.org/ns/solid/acp#Matcher",
  /* eslint-enable @typescript-eslint/naming-convention */
  accessControlResource: "http://www.w3.org/ns/solid/acp#accessControlResource",
  accessControl: "http://www.w3.org/ns/solid/acp#accessControl",
  memberAccessControl: "http://www.w3.org/ns/solid/acp#memberAccessControl",
  apply: "http://www.w3.org/ns/solid/acp#apply",
  allOf: "http://www.w3.org/ns/solid/acp#allOf",
  anyOf: "http://www.w3.org/ns/solid/acp#anyOf",
  noneOf: "http://www.w3.org/ns/solid/acp#noneOf",
  allow: "http://www.w3.org/ns/solid/acp#allow",
  deny: "http://www.w3.org/ns/solid/acp#deny",
  agent: "http://www.w3.org/ns/solid/acp#agent",
  client: "http://www.w3.org/ns/solid/acp#client",
  issuer: "http://www.w3.org/ns/solid/acp#issuer",
  /* eslint-disable @typescript-eslint/naming-convention */
  AuthenticatedAgent: "http://www.w3.org/ns/solid/acp#AuthenticatedAgent",
  CreatorAgent: "http://www.w3.org/ns/solid/acp#CreatorAgent",
  PublicAgent: "http://www.w3.org/ns/solid/acp#PublicAgent",
  OwnerAgent: "http://www.w3.org/ns/solid/acp#OwnerAgent",
  PublicClient: "http://www.w3.org/ns/solid/acp#PublicClient",
  /* eslint-enable @typescript-eslint/naming-convention */
};
