import type { IAccessControl } from "./i_access_control";
import type { IIriResource } from "./i_iri_resource";

export interface IAccessControlResource extends IIriResource {
  readonly accessControl: IAccessControl[];
  readonly memberAccessControl: IAccessControl[];
}
