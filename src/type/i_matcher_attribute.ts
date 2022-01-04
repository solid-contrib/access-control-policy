import type { MATCHER_ATTRIBUTES } from "../constant/matcher_attributes";

export type IMatcherAttribute = typeof MATCHER_ATTRIBUTES extends Set<infer T>
  ? T
  : never;
