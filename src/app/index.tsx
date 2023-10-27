import { ThemeProvider } from '@emotion/react';
import { THEME } from '@/app/styles/theme';
import GlobalStyles from '@/app/styles/global';
import { Main } from '@/pages/Main';

const App = () => (
  <ThemeProvider theme={THEME}>
    <GlobalStyles />
    <Main />
  </ThemeProvider>
);

export default App;
