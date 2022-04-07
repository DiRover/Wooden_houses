import { css, Global } from '@emotion/react';
import { FC, memo } from 'react';

const GlobalStyles: FC = memo(() => {
  return (
    <Global
      styles={css`
        :root {
          --font-size: 18px;

          --color-primary: #0f68b8;

          --border-wieght: 1px;
          --border-color: rgba(53, 51, 51, 0.3); //#353333;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto, sans-serif;
          font-size: var(--font-size);
        }
      `}
    />
  );
});

export default GlobalStyles;
