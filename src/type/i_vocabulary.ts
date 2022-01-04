import type { IIriResource } from "./i_iri_resource";

/**
 * Interface for RDF vocabularies
 *
 * > The IRIs in an RDF vocabulary often begin with a common substring known as a namespace IRI. Some namespace IRIs are associated by convention with a short name known as a namespace prefix.
 * > -- https://www.w3.org/TR/rdf11-concepts/#vocabularies
 */
export interface IVocabulary extends IIriResource {
  readonly prefix: string;
  readonly version: string;
}
