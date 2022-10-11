import { css, Global } from '@emotion/react';
import { FC, memo } from 'react';

const GlobalStyles: FC = memo(() => {
  return (
    <Global
      styles={css`
        :root {
          --font-size: 18px;
          --font-color-default: #FFFFFF;
          --font-color-common: #353333;

          --color-primary: #0f68b8;

          --border-wieght: 1px;
          --border-color: rgba(53, 51, 51, 0.3); //#353333;
          
          --mune-item-background: #725C44;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto, sans-serif;
          font-size: var(--font-size);
          color: var(--font-color-common);
        }
      `}
    />
  );
});

export default GlobalStyles;
