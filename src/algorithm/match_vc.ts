import type { IContext } from "../type/i_context";
import type { IMatcher } from "../type/i_matcher";

/**
 * The vc matching algorithm
 *
 * The context matches if the matcher vc attribute contains a context vc.
 *
 * @param matcher The matcher to evaluate
 * @param context The context in which the matcher is evaluated
 * @returns True if there is a match, false otherwise
 */
export function matchVc(matcher: IMatcher, context: IContext): boolean {
  return (
    !!context.vc &&
    context.vc.some((matchingVc) => matcher.vc.includes(matchingVc))
  );
}
