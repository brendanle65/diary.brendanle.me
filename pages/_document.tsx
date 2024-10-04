// import libraries
import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Used as a base for each page. Includes the <html> and <body> tags used on each page.
 *
 * @component
 */
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
            sizes="any"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </Html>
    );
  }
}
