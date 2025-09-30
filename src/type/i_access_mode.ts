import type { ACCESS_MODES } from "../constant/access_modes.js";

export type IAccessMode = typeof ACCESS_MODES extends Set<infer T> ? T : never;
