import "@/styles/globals.css";
import Storage from "@/util/Storage";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (!Storage.getItem("theme")) {
      Storage.setItem("theme", "#ffe5fb");
      Storage.setItem("box_theme", "#FFFFFF");
      Storage.setItem("align", "horizontal");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
