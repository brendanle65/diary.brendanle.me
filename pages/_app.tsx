// Import libraries
import { AppProps } from "next/app";
import Head from "next/head";

// Import other
import { AppLayout } from "@components/layouts";
import { CursorStateProvider } from "@contexts/CursorContext";
import { AppStateProvider } from "@contexts/AppStateContext";

// Import styles
import "@styles/reset.scss";
import "@styles/variables.scss";
import "@styles/global.scss";
import { EB_Garamond, Cormorant_Garamond } from "next/font/google"; // Import Fonts (Optimized By NextJS)

// Configure fonts
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600"],
});

/**
 * Used to initialize each page.
 *
 * Here, we import fonts, context providers, and etc.
 * that need to be done once for the entire application.
 *
 * @component
 */
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className={`${eb_garamond.variable} ${cormorant_garamond.variable}`}>
        <AppStateProvider>
          <CursorStateProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </CursorStateProvider>
        </AppStateProvider>
      </div>
    </>
  );
}
