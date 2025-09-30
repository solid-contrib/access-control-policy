import { matchClient } from "../../../src/algorithm/match_client.js";
import { ACP } from "../../../src/constant/acp.js";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x.js";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x.js";

describe("matchClient", () => {
  it("returns false when something is undefined", () => {
    expect(matchClient(EMPTY_MATCHER_X, EMPTY_CONTEXT_X)).toBe(false);

    expect(
      matchClient({ ...EMPTY_MATCHER_X, client: ["x"] }, EMPTY_CONTEXT_X)
    ).toBe(false);

    expect(
      matchClient(EMPTY_MATCHER_X, { ...EMPTY_CONTEXT_X, client: "x" })
    ).toBe(false);
  });

  it("returns true when context client is matched", () => {
    expect(
      matchClient(
        { ...EMPTY_MATCHER_X, client: ["x"] },
        { ...EMPTY_CONTEXT_X, client: "x" }
      )
    ).toBe(true);
  });

  it("returns false when client is not matched", () => {
    expect(
      matchClient(
        { ...EMPTY_MATCHER_X, client: ["x", "y", "z"] },
        { ...EMPTY_CONTEXT_X, client: "a" }
      )
    ).toBe(false);
  });

  it("returns true when matcher contains the ACP Public Client", () => {
    expect(
      matchClient(
        { ...EMPTY_MATCHER_X, client: [ACP.PublicClient] },
        EMPTY_CONTEXT_X
      )
    ).toBe(true);

    expect(
      matchClient(
        { ...EMPTY_MATCHER_X, client: ["x", "y", "z", ACP.PublicClient] },
        { ...EMPTY_CONTEXT_X, client: "a" }
      )
    ).toBe(true);
  });
});
