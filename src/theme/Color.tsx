import { createGlobalStyle, css } from 'styled-components';

const Colors = css`
  :root {
    --color-primary-100: #b3bdd1;
    --color-primary-200: #8091b3;
    --color-primary-300: #4d6594;
    --color-primary-400: #26447d;
    --color-primary: #002366;
    --color-primary-600: #001f5e;
    --color-primary-700: #001a53;
    --color-primary-800: #001549;
    --color-primary-900: #000c38;

    --color-secondary-100: #b3cfcd;
    --color-secondary-200: #80afab;
    --color-secondary-300: #4d8e89;
    --color-secondary-400: #267670;
    --color-secondary: #005e57;
    --color-secondary-600: #00564f;
    --color-secondary-700: #004c46;
    --color-secondary-800: #00423c;
    --color-secondary-900: #00312c;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-warning: #ff0000;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
