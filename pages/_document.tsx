import Document, { Html, Head, Main, NextScript } from "next/document";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";

function MyDocument() {
  return (
    <Html>
      <Head></Head>
      <body>
        <PageHeader />
        <Main />
        <NextScript />
        <PageFooter />
      </body>
    </Html>
  );
}

export default MyDocument;
