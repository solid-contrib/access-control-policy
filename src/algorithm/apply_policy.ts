import type { IContext } from "../type/i_context";
import type { IPolicy } from "../type/i_policy";
import { match } from "./match";

/**
 * # The apply policy algorithm
 *
 * A policy is applied if:
 * - At least one matcher it uses matches the given context; and
 * - All the conditions it defines are satisfied.
 *
 * Policy conditions behave like intersection, union and exclusion operators. In
 * order to be satisfied:
 * - allOf requires all of its matchers to match the given context;
 * - anyOf requires one of its matchers to match the given context;
 * - noneOf requires none of its matchers to match the given context.
 *
 * Note: Given that the noneOf condition excludes matches, a policy without a
 * satisfied allOf or anyOf condition never applies.
 *
 * @param policy The policy to evaluate
 * @param context The context in which the policy is evaluated
 * @returns True if the policy applies, false otherwise
 */
export function applyPolicy(policy: IPolicy, context: IContext): boolean {
  if (policy.allOf.length + policy.anyOf.length > 0) {
    return (
      (policy.allOf.length === 0 ||
        policy.allOf.every((matcher) => match(matcher, context))) &&
      (policy.anyOf.length === 0 ||
        policy.anyOf.some((matcher) => match(matcher, context))) &&
      (policy.noneOf.length === 0 ||
        !policy.noneOf.some((matcher) => match(matcher, context)))
    );
  }
  return false;
}
