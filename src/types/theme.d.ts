import "styled-components";

export interface Theme {
  primary: {
    100: string;
    200: string;
    300: string;
  };
  secondary: {
    100: string;
    200: string;
    300: string;
  };
  text: {
    100: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
