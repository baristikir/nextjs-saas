import { AuthProvider } from '@/lib/auth';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';
import { CSSReset } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;