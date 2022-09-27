import Layout from "../components/Layout";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp:
          (App) =>
          ({ Component, pageProps }) =>
            (
              <JssProvider registry={registry} generateId={generateId}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </JssProvider>
            ),
      });
    const initialProps = await Document.getInitialProps(ctx); // this Document is not imported
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
    return (
      <Html>
        <Head>
          <link rel="icon" href="../styles/Home.modules.css" />
          <link href="../styles/globals.css" rel="stylesheet" />
        </Head>
        <body>
          <Layout />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
