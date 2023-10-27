import { Global, css, useTheme } from '@emotion/react';
import { DEFAULT_FONT_WEIGHT } from '@/shared/constants/styles';
import 'normalize.css';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

        *,
        &:after,
        &:before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          scroll-behavior: smooth;
        }

        body {
          font-family: ${theme.fontFamily};
          font-weight: ${DEFAULT_FONT_WEIGHT};
          background-color: ${theme.colors.white};
          color: ${theme.colors.grey};
        }
      `}
    />
  );
};

export default GlobalStyles;
