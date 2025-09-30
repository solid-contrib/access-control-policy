import { matchVc } from "../../../src/algorithm/match_vc.js";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x.js";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x.js";

describe("matchVc", () => {
  it("returns false when something is undefined", () => {
    expect(matchVc(EMPTY_MATCHER_X, EMPTY_CONTEXT_X)).toBe(false);

    expect(matchVc({ ...EMPTY_MATCHER_X, vc: ["x"] }, EMPTY_CONTEXT_X)).toBe(
      false
    );

    expect(matchVc(EMPTY_MATCHER_X, { ...EMPTY_CONTEXT_X, vc: ["x"] })).toBe(
      false
    );
  });

  it("returns true when context VC is matched", () => {
    expect(
      matchVc(
        { ...EMPTY_MATCHER_X, vc: ["x"] },
        { ...EMPTY_CONTEXT_X, vc: ["x"] }
      )
    ).toBe(true);
    expect(
      matchVc(
        { ...EMPTY_MATCHER_X, vc: ["y"] },
        { ...EMPTY_CONTEXT_X, vc: ["x", "y", "z"] }
      )
    ).toBe(true);
    expect(
      matchVc(
        { ...EMPTY_MATCHER_X, vc: ["x", "y", "z"] },
        { ...EMPTY_CONTEXT_X, vc: ["z"] }
      )
    ).toBe(true);
  });

  it("returns false when VC is not matched", () => {
    expect(
      matchVc(
        { ...EMPTY_MATCHER_X, vc: ["x", "y", "z"] },
        { ...EMPTY_CONTEXT_X, vc: ["a"] }
      )
    ).toBe(false);
  });
});
