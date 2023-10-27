import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      red: string;
      grey: string;
      lightGrey: string;
      lightGrey2: string;
      lightGrey3: string;
    };
    boxShadows: {
      default: string;
    };
    fontFamily: string;
  }
}
