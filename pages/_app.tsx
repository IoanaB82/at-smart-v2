import "../styles/globals.css";

import Layout from "../components/Layout";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { AppProvider } from "../utils/AppContext";
import { AppProps } from "next/dist/next-server/lib/router/router";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#f38e82;",
      },
    },
  });

  return (
    <ErrorBoundary>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
