import { ACP } from "../../src/constant/acp.js";
import type { IMatcher } from "../../src/type/i_matcher.js";

export const ALWAYS_MATCHER_X: IMatcher = {
  iri: "x",
  agent: [ACP.PublicAgent],
  client: [],
  issuer: [],
  vc: [],
};
