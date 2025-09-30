import type { IIriResource } from "./i_iri_resource.js";
import type { IPolicy } from "./i_policy.js";

export interface IAccessControl extends IIriResource {
  readonly policy: IPolicy[];
}
