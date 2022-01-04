import type { IAccessControlResource } from "./i_access_control_resource";
import type { IIriResource } from "./i_iri_resource";

export interface IAccessControlledResource extends IIriResource {
  readonly accessControlResource: IAccessControlResource;
}
