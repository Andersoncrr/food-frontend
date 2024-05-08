import "styled-components";

export interface Theme {
  primary: {
    100: string;
    200: string;
    300: string;
  };
  accent: {
    100: string;
    200: string;
  };
  text: {
    100: string;
    200: string;
    300: string;
  };
  bg: {
    100: string;
    200: string;
    300: string;
  };
  error: {
    100: string;
    200: string;
    300: string;
  };
  success: {
    100: string;
    200: string;
    300: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
