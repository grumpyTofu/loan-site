import { validateEmail, isNullOrWhiteSpace, validateName, validateLoanAmount } from "./built-labs-validation";

describe("Validate Name", () => {
  it("should validate good names", () => {
    const mockName = "Jack";
    expect(validateName(mockName)).toBe(true);
  });
  it("should block bad names", () => {
    const mockName = "X AE A-12";
    expect(validateName(mockName)).toBe(false);
  });
});

describe("Validate Number", () => {
  it("should validate minimum loan amount", () => {
    const mockNumber = 10000;
    expect(validateLoanAmount(mockNumber)).toBe(true);
  });
  it("should block 0", () => {
    const mockNumber = 0;
    expect(validateLoanAmount(mockNumber)).toBe(false);
  });
  it("should block negative", () => {
    const mockNumber = -12;
    expect(validateLoanAmount(mockNumber)).toBe(false);
  });
});

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
