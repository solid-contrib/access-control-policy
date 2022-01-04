/**
 * Interface for IRI resources
 *
 * > Any IRI or literal denotes something in the world (the "universe of discourse"). These things are called resources. Anything can be a resource, including physical things, documents, abstract concepts, numbers and strings; the term is synonymous with "entity" as it is used in the RDF Semantics specification. The resource denoted by an IRI is called its referent, and the resource denoted by a literal is called its literal value. Literals have datatypes that define the range of possible values, such as strings, numbers, and dates. Special kind of literals, language-tagged strings, denote plain-text strings in a natural language.
 * > -- https://www.w3.org/TR/rdf11-concepts/#resources-and-statements
 */
export interface IIriResource {
  readonly iri: string;
}
