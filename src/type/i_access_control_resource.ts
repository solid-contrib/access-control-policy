import type { IAccessControl } from "./i_access_control.js";
import type { IIriResource } from "./i_iri_resource.js";

export interface IAccessControlResource extends IIriResource {
  readonly accessControl: IAccessControl[];
  readonly memberAccessControl: IAccessControl[];
}
