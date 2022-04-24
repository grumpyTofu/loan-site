export const validateEmail = (val: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
export const objectIsEmpty = (val: any | null = null) => val && typeof val === "object" && Object.keys(val).length === 0;
export const isNullOrWhiteSpace = (val: string | null = null) => val !== null && val.trim().length === 0;