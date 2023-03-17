import Document, { Html, Head, Main, NextScript } from "next/document";
import PageFooter from "../components/PageFooter";

function MyDocument() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <PageFooter />
      </body>
    </Html>
  );
}

export default MyDocument;
