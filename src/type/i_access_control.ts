import type { IIriResource } from "./i_iri_resource";
import type { IPolicy } from "./i_policy";

export interface IAccessControl extends IIriResource {
  readonly policy: IPolicy[];
}
