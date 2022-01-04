export interface IContext {
  // The resource to assert access permissions for
  readonly target: string;
  // The agent trying to access the target resource
  readonly agent?: string;
  // The identity provider that asserted the identity of the agent trying to access the target resource
  readonly issuer?: string;
  // The client used to access the target resource
  readonly client?: string;
  // The creator(s) of the target resource
  readonly creator?: string[];
  // The owner(s) of the target resource
  readonly owner?: string[];
}
