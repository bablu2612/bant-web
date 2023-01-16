import type { AppProps } from "next/app";
import Theme from "@/Context/Theme";
import "@/styles/globals.css";
import GlobalStyle from "@/styles/globalstyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}