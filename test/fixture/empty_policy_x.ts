import type { IPolicy } from "../../src/type/i_policy";

// TODO all sets?
export const EMPTY_POLICY_X: IPolicy = {
  iri: "x",
  allOf: [],
  anyOf: [],
  noneOf: [],
  allow: new Set([]),
  deny: new Set([]),
};
