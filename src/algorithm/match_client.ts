import { ACP } from "../constant/acp.js";
import type { IContext } from "../type/i_context.js";
import type { IMatcher } from "../type/i_matcher.js";

/**
 * The client matching algorithm
 *
 * The context matches if the matcher client attribute contains the defined context client or the ACP Public Client.
 *
 * @param matcher The matcher to evaluate
 * @param context The context in which the matcher is evaluated
 * @returns True if there is a match, false otherwise
 */
export function matchClient(matcher: IMatcher, context: IContext): boolean {
  return matcher.client.some(
    (matchingClient) =>
      matchingClient === ACP.PublicClient ||
      (!!context.client && matchingClient === context.client)
  );
}
