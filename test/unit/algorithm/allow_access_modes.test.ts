import { allowAccessModes } from "../../../src/algorithm/allow_access_modes.js";
import { ACL } from "../../../src/constant/acl.js";
import { ALWAYS_MATCHER_X } from "../../fixture/always_matcher_x.js";
import { EMPTY_CONTEXT_X } from "../../fixture/empty_context_x.js";
import { EMPTY_POLICY_X } from "../../fixture/empty_policy_x.js";

describe("allowAccessModes", () => {
  it("returns and empty set by default", () => {
    expect(allowAccessModes([EMPTY_POLICY_X], EMPTY_CONTEXT_X)).toStrictEqual(
      new Set()
    );
  });

  it("returns an allowed access mode for a matching policy", () => {
    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set([ACL.Read]));
  });

  it("doesn't return a denied access mode for a matching policy", () => {
    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read]),
            deny: new Set([ACL.Read]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set());

    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read]),
          },
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            deny: new Set([ACL.Read]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set());

    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            deny: new Set([ACL.Read, ACL.Append, ACL.Write, ACL.Control]),
          },
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read, ACL.Append, ACL.Write, ACL.Control]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set());

    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            deny: new Set([ACL.Read, ACL.Append, ACL.Write, ACL.Control]),
          },
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read, ACL.Append, ACL.Write, ACL.Control]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set());
  });

  it("returns allowed access modes that haven't been denied", () => {
    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read, ACL.Append]),
          },
          {
            ...EMPTY_POLICY_X,
            allOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read, ACL.Write, ACL.Control]),
          },
          {
            ...EMPTY_POLICY_X,
            allOf: [ALWAYS_MATCHER_X],
            deny: new Set([ACL.Append]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set([ACL.Read, ACL.Write, ACL.Control]));

    expect(
      allowAccessModes(
        [
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            allow: new Set([ACL.Read]),
          },
          {
            ...EMPTY_POLICY_X,
            anyOf: [ALWAYS_MATCHER_X],
            deny: new Set([ACL.Read]),
          },
        ],
        EMPTY_CONTEXT_X
      )
    ).toStrictEqual(new Set());
  });
});
