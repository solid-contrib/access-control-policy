import { ACP } from "../constant/acp.js";
import type { IContext } from "../type/i_context.js";
import type { IMatcher } from "../type/i_matcher.js";

/**
 * # The agent matching algorithm
 *
 * The context agent should be an IRI identifying the agent by virtue of the agent having proven he controls the IRI. For example, this IRI could be a WebID as defined by the WebID specification and over which control has been asserted as defined in the Solid OIDC specification.
 *
 * The context matches if the matcher agent attribute contains:
 * - The defined context agent; or
 * - The ACP Public Agent; or
 * - The ACP Authenticated Agent and the given context agent is defined; or
 * - The ACP Creator Agent and the context creators include the agent; or
 * - The ACP Owner Agent and the context owners include the agent.
 *
 * @param matcher The matcher to evaluate
 * @param context The context in which the matcher is evaluated
 * @returns True if there is a match, false otherwise
 */
export function matchAgent(matcher: IMatcher, context: IContext): boolean {
  // If at least one agent IRI matches return true
  if (
    matcher.agent.some((matchingAgent) => {
      // The ACP Public Agent matches every context
      if (matchingAgent === ACP.PublicAgent) {
        return true;
      }
      // If the context agent is defined
      if (context.agent) {
        // The context agent matches a matching agent
        if (matchingAgent === context.agent) {
          return true;
        }
        // The ACP AuthenticatedAgent matches any defined context agent
        if (matchingAgent === ACP.AuthenticatedAgent) {
          return true;
        }
        // The ACP Creator Agent matches context agent and context creator
        if (matchingAgent === ACP.CreatorAgent) {
          return context.creator?.includes(context.agent);
        }
        // The ACP Owner Agent matches context agent and context owner
        if (matchingAgent === ACP.OwnerAgent) {
          return context.owner?.includes(context.agent);
        }
      }
      // Otherwise, the matching agent doesn't match
      return false;
    })
  ) {
    return true;
  }
  // Otherwise, return false
  return false;
}
