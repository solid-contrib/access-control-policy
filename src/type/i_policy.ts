import type { IAccessMode } from "./i_access_mode";
import type { IIriResource } from "./i_iri_resource";
import type { IMatcher } from "./i_matcher";

export interface IPolicy extends IIriResource {
  readonly allOf: IMatcher[];
  readonly anyOf: IMatcher[];
  readonly noneOf: IMatcher[];
  readonly allow: Set<IAccessMode>;
  readonly deny: Set<IAccessMode>;
}
