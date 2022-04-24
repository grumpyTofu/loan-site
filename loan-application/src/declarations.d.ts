declare module "@built-labs/validation" {
  const _validation: {
    validateName: (val: string) => boolean;
    validateLoanAmount: (val: number) => boolean;
    validateEmail: (val: string) => boolean;
    isNullOrWhiteSpace: (val: string | null) => boolean;
  };
  export = _validation;
}

declare module "@built-labs/theme" {
  const _theme: {
    theme: any;
  }
  export = _theme;
}

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
