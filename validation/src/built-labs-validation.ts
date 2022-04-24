export const validateName = (val: string) => /^[a-zA-Z ]{2,30}$/.test(val);
export const validateLoanAmount = (val: number) => val >= 10000;
export const validateEmail = (val: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
export const isNullOrWhiteSpace = (val: string | null = null) => val !== null && val.trim().length === 0;
