import { match } from "../../../src/algorithm/match";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x";

describe("match", () => {
  it("returns false when something is undefined", () => {
    expect(match(EMPTY_MATCHER_X, EMPTY_CONTEXT_X)).toBe(false);

    expect(match({ ...EMPTY_MATCHER_X, agent: ["x"] }, EMPTY_CONTEXT_X)).toBe(
      false
    );

    expect(match(EMPTY_MATCHER_X, { ...EMPTY_CONTEXT_X, agent: "x" })).toBe(
      false
    );
  });

  it("returns false when one condition doesn't match", () => {
    expect(
      match(
        {
          ...EMPTY_MATCHER_X,
          agent: ["x"],
          client: ["x"],
          issuer: ["x"],
          vc: ["x"],
        },
        { ...EMPTY_CONTEXT_X, agent: "x", client: "x", issuer: "y", vc: ["x"] }
      )
    ).toBe(false);

    expect(
      match(
        {
          ...EMPTY_MATCHER_X,
          agent: ["x"],
          client: ["x"],
          issuer: ["x"],
          vc: ["x"],
        },
        { ...EMPTY_CONTEXT_X, agent: "x", client: "x", issuer: "y", vc: ["x"] }
      )
    ).toBe(false);
  });

  it("returns true when all conditions match", () => {
    expect(
      match(
        {
          ...EMPTY_MATCHER_X,
          agent: ["x"],
          client: ["x"],
          issuer: ["x"],
          vc: ["x"],
        },
        { ...EMPTY_CONTEXT_X, agent: "x", client: "x", issuer: "x", vc: ["x"] }
      )
    ).toBe(true);
  });
});
