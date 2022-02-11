import type { IContext } from "../type/i_context";
import type { IMatcher } from "../type/i_matcher";
import { matchAgent } from "./match_agent";
import { matchClient } from "./match_client";
import { matchIssuer } from "./match_issuer";
import { matchVc } from "./match_vc";

/**
 * The match algorithm
 *
 * The context matches if:
 * - At least one matching attribute is defined; and
 * - Every defined attribute matches the context.
 *
 * @param matcher The matcher to evaluate
 * @param context The context in which the matcher is evaluated
 * @returns True if the context matches, false otherwise
 */
export function match(matcher: IMatcher, context: IContext): boolean {
  if (
    matcher.agent.length +
      matcher.client.length +
      matcher.issuer.length +
      matcher.vc.length >
    0
  ) {
    return (
      (matcher.agent.length === 0 || matchAgent(matcher, context)) &&
      (matcher.client.length === 0 || matchClient(matcher, context)) &&
      (matcher.issuer.length === 0 || matchIssuer(matcher, context)) &&
      (matcher.vc.length === 0 || matchVc(matcher, context))
    );
  }
  return false;
}
