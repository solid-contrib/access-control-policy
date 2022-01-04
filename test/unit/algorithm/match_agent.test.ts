import { matchAgent } from "../../../src/algorithm/match_agent";
import { ACP } from "../../../src/constant/acp";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x";
import { EMPTY_MATCHER_X } from "../../fixture/empty_matcher_x";

describe("matchAgent", () => {
  it("returns false when something is undefined", () => {
    expect(matchAgent(EMPTY_MATCHER_X, EMPTY_CONTEXT_X)).toBe(false);

    expect(
      matchAgent({ ...EMPTY_MATCHER_X, agent: ["x"] }, EMPTY_CONTEXT_X)
    ).toBe(false);

    expect(
      matchAgent(EMPTY_MATCHER_X, { ...EMPTY_CONTEXT_X, agent: "x" })
    ).toBe(false);
  });

  it("returns true when context agent is matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: ["x"] },
        { ...EMPTY_CONTEXT_X, agent: "x" }
      )
    ).toBe(true);
  });

  it("returns false when agent is not matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: ["x", "y", "z"] },
        { ...EMPTY_CONTEXT_X, agent: "a" }
      )
    ).toBe(false);
  });

  it("returns true when matcher contains the ACP Public Agent", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.PublicAgent] },
        EMPTY_CONTEXT_X
      )
    ).toBe(true);

    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: ["x", "y", "z", ACP.PublicAgent] },
        { ...EMPTY_CONTEXT_X, agent: "a" }
      )
    ).toBe(true);
  });

  it("returns true when the ACP Authenticated Agent is matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.AuthenticatedAgent] },
        { ...EMPTY_CONTEXT_X, agent: "x" }
      )
    ).toBe(true);
  });

  it("returns false when the ACP Authenticated Agent is not matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.AuthenticatedAgent] },
        { ...EMPTY_CONTEXT_X }
      )
    ).toBe(false);
  });

  it("returns true when the ACP Creator Agent is matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.CreatorAgent] },
        { ...EMPTY_CONTEXT_X, agent: "y", creator: ["x", "y", "z"] }
      )
    ).toBe(true);
  });

  it("returns false when the ACP Creator Agent is not matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.CreatorAgent] },
        { ...EMPTY_CONTEXT_X, agent: "a", creator: ["x", "y", "z"] }
      )
    ).toBe(false);

    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.CreatorAgent] },
        { ...EMPTY_CONTEXT_X, agent: "x" }
      )
    ).toBe(false);
  });

  it("returns true when the ACP Owner Agent is matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.OwnerAgent] },
        { ...EMPTY_CONTEXT_X, agent: "y", owner: ["x", "y", "z"] }
      )
    ).toBe(true);
  });

  it("returns false when the ACP Owner Agent is not matched", () => {
    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.OwnerAgent] },
        { ...EMPTY_CONTEXT_X, agent: "a", owner: ["x", "y", "z"] }
      )
    ).toBe(false);

    expect(
      matchAgent(
        { ...EMPTY_MATCHER_X, agent: [ACP.OwnerAgent] },
        { ...EMPTY_CONTEXT_X, agent: "x" }
      )
    ).toBe(false);
  });
});
