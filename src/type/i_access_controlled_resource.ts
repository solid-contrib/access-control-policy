import type { IAccessControlResource } from "./i_access_control_resource.js";
import type { IIriResource } from "./i_iri_resource.js";

export interface IAccessControlledResource extends IIriResource {
  readonly accessControlResource: IAccessControlResource;
}
