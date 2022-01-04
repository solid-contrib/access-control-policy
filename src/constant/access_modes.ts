import { ACL } from "./acl";

export const ACCESS_MODES = new Set([
  ACL.Read,
  ACL.Append,
  ACL.Write,
  ACL.Control,
]);
