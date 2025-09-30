import type { IAccessMode } from "./i_access_mode.js";
import type { IIriResource } from "./i_iri_resource.js";
import type { IMatcher } from "./i_matcher.js";

export interface IPolicy extends IIriResource {
  readonly allOf: IMatcher[];
  readonly anyOf: IMatcher[];
  readonly noneOf: IMatcher[];
  readonly allow: Set<IAccessMode>;
  readonly deny: Set<IAccessMode>;
}
