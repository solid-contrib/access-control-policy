import * as m from "../../src/mod.js";

it("exports the Constants", () => {
  expect(m.ACCESS_MODES).toBeDefined();
  expect(m.ACL).toBeDefined();
  expect(m.ACP).toBeDefined();
  expect(m.MATCHER_ATTRIBUTES).toBeDefined();
});

it("exports the Algorithms", () => {
  expect(m.allowAccessModes).toBeDefined();
  expect(m.applyPolicy).toBeDefined();
  expect(m.match).toBeDefined();
  expect(m.matchAgent).toBeDefined();
  expect(m.matchClient).toBeDefined();
  expect(m.matchIssuer).toBeDefined();
});
