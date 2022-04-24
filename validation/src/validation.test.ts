import { validateEmail, objectIsEmpty, isNullOrWhiteSpace } from "./built-labs-validation";

describe("Validate Email", () => {
  it("should identify @ symbol", () => {
    const mockEmail = "test@example.com";
    expect(validateEmail(mockEmail)).toBe(true);
  });
  it("should block bad emails", () => {
    const mockEmail = "badEmailExample.com";
    expect(validateEmail(mockEmail)).toBe(false);
  });
});

describe("Validate Object", () => {
  it("should identify empty objects", () => {
    const mockObject = {};
    expect(objectIsEmpty(mockObject)).toBe(true);
  });
  it("should identify objects with defined properties", () => {
    const mockObject = { test: "string" };
    expect(objectIsEmpty(mockObject)).toBe(false);
  });
});

describe("Check Empty String", () => {
  it("should identify empty strings", () => {
    const mockString = "";
    expect(isNullOrWhiteSpace(mockString)).toBe(true);
  });
  it("should identify white space as empty", () => {
    const mockString = "     ";
    expect(isNullOrWhiteSpace(mockString)).toBe(true);
  });
  it("should identify non-empty strings", () => {
    const mockString = "   sdfkjls  ";
    expect(isNullOrWhiteSpace(mockString)).toBe(false);
  });
});
