import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = () => {
  return {
    pageProps: {
      test: 100,
    },
  };
};
