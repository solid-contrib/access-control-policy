import type { IIriResource } from "./i_iri_resource";

export interface IMatcher extends IIriResource {
  readonly agent: string[];
  readonly client: string[];
  readonly issuer: string[];
  readonly vc: string[];
}
