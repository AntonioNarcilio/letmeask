import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;
      comment: string;
      textHighlight: string;
      white: string;
      gray: string;
      red: string;
      redDark: string;
      redShadow: string;
      green: string;
      greenDark: string;
      greenShadow: string;
      pink: string;
      pinkDark: string;
      pinkShadow: string;
      purple: string;
      purpleDark: string;
      purpleShadow: string;
      cyan: string;
    },
  }
}
