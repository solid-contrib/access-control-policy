import type { IContext } from "../type/i_context.js";
import type { IMatcher } from "../type/i_matcher.js";

/**
 * The issuer matching algorithm
 *
 * The context matches if the matcher issuer attribute contains the defined context issuer.
 *
 * @param matcher The matcher to evaluate
 * @param context The context in which the matcher is evaluated
 * @returns True if there is a match, false otherwise
 */
export function matchIssuer(matcher: IMatcher, context: IContext): boolean {
  return (
    !!context.issuer &&
    matcher.issuer.some((matchingIssuer) => matchingIssuer === context.issuer)
  );
}
