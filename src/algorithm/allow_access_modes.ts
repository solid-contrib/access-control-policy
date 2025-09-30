import type { IAccessMode } from "../type/i_access_mode.js";
import type { IContext } from "../type/i_context.js";
import type { IPolicy } from "../type/i_policy.js";
import { applyPolicy } from "./apply_policy.js";

/**
 * # The allow access modes algorithm
 *
 * An access mode is allowed if:
 * - A policy that applies allows it; and
 * - No policy that applies deny it.
 *
 * @param policies The policies to evaluate
 * @param context The context in which the policies are evaluated
 * @returns A set of allowed access modes
 */
export function allowAccessModes(
  policies: IPolicy[],
  context: IContext
): Set<IAccessMode> {
  const allowedModes = new Set<IAccessMode>();
  const deniedModes = new Set<IAccessMode>();

  // Loop through all policies
  for (const policy of policies) {
    // Satisfied policies contribute to allowed and denied modes
    if (applyPolicy(policy, context)) {
      // Add modes to the set of allowed and denied
      policy.allow.forEach((accessMode) => allowedModes.add(accessMode));
      policy.deny.forEach((accessMode) => deniedModes.add(accessMode));
    }
  }

  // Remove the denied modes from the allowed modes
  for (const deniedMode of deniedModes) {
    allowedModes.delete(deniedMode);
  }

  // Return filtering out eventual illegal access modes
  return allowedModes;
}
