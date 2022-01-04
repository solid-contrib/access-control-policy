import { ACP } from "../../src/constant/acp";
import type { IMatcher } from "../../src/type/i_matcher";

export const ALWAYS_MATCHER_X: IMatcher = {
  iri: "x",
  agent: [ACP.PublicAgent],
  client: [],
  issuer: [],
};
