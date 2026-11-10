import { test, expect } from "@playwright/test";
import _ from "lodash";

test("uses lodash", () => {
  expect(_.add(1, 1)).toBe(2);
});
