import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryInverted: string;
      secondary: string;
      questionBackground: string | '';
      text: string;
      textHighlight: string;
      textArea: string;
      highlighted: string
      comment: string;
      white: string;
      gray: string;
      grayDark: string;
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
      yellow: string;
    },
  }
}
