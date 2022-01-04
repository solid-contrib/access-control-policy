import { matchIssuer } from "../../../src/algorithm/match_issuer";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x";

describe("matchIssuer", () => {
  it("returns false when something is undefined", () => {
    expect(matchIssuer(EMPTY_MATCHER_X, EMPTY_CONTEXT_X)).toBe(false);

    expect(
      matchIssuer({ ...EMPTY_MATCHER_X, issuer: ["x"] }, EMPTY_CONTEXT_X)
    ).toBe(false);

    expect(
      matchIssuer(EMPTY_MATCHER_X, { ...EMPTY_CONTEXT_X, issuer: "x" })
    ).toBe(false);
  });

  it("returns true when context issuer is matched", () => {
    expect(
      matchIssuer(
        { ...EMPTY_MATCHER_X, issuer: ["x"] },
        { ...EMPTY_CONTEXT_X, issuer: "x" }
      )
    ).toBe(true);
  });

  it("returns false when issuer is not matched", () => {
    expect(
      matchIssuer(
        { ...EMPTY_MATCHER_X, issuer: ["x", "y", "z"] },
        { ...EMPTY_CONTEXT_X, issuer: "a" }
      )
    ).toBe(false);
  });
});
