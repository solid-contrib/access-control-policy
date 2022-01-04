import { applyPolicy } from "../../../src/algorithm/apply_policy";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x";
import { EMPTY_POLICY_X } from "../../fixture/empty_policy_x";

describe("applyPolicy", () => {
  it("returns false when something is undefined", () => {
    expect(applyPolicy(EMPTY_POLICY_X, EMPTY_CONTEXT_X)).toBe(false);
  });

  it("returns true when allOf policies match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          allOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "x",
        }
      )
    ).toBe(true);
  });

  it("returns false when allOf policies don't match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          allOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(false);

    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          allOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
        },
        EMPTY_CONTEXT_X
      )
    ).toBe(false);
  });

  it("returns true when anyOf policies match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(true);
  });

  it("returns false when anyOf policies don't match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "y",
          client: "y",
        }
      )
    ).toBe(false);
  });

  it("returns true when noneOf policies don't match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
          noneOf: [
            { ...EMPTY_MATCHER_X, agent: ["y"] },
            { ...EMPTY_MATCHER_X, client: ["z"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(true);
  });

  it("returns false when noneOf policies match", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
          noneOf: [
            { ...EMPTY_MATCHER_X, agent: ["y"] },
            { ...EMPTY_MATCHER_X, client: ["y"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(false);

    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          noneOf: [{ ...EMPTY_MATCHER_X, agent: ["x"] }],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
        }
      )
    ).toBe(false);
  });

  it("returns true when all conditions are met", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          allOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["y"] },
          ],
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["x"] },
          ],
          noneOf: [
            { ...EMPTY_MATCHER_X, agent: ["y"] },
            { ...EMPTY_MATCHER_X, client: ["z"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(true);
  });

  it("returns false when one condition fails", () => {
    expect(
      applyPolicy(
        {
          ...EMPTY_POLICY_X,
          allOf: [
            { ...EMPTY_MATCHER_X, agent: ["x"] },
            { ...EMPTY_MATCHER_X, client: ["y"] },
          ],
          anyOf: [
            { ...EMPTY_MATCHER_X, agent: ["z"] },
            { ...EMPTY_MATCHER_X, client: ["z"] },
          ],
          noneOf: [
            { ...EMPTY_MATCHER_X, agent: ["y"] },
            { ...EMPTY_MATCHER_X, client: ["z"] },
          ],
        },
        {
          ...EMPTY_CONTEXT_X,
          agent: "x",
          client: "y",
        }
      )
    ).toBe(false);
  });
});
