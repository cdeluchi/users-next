import Layout from "../components/Layout";
import "../styles/globals.css";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

function MyApp({ Component, pageProps }) {
  const getInitialProps = async (ctx) => {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp:
          (myApp) =>
          ({ Component, pageProps }) =>
            (
              <JssProvider registry={registry} generateId={generateId}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </JssProvider>
            ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  };

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
}

export default MyApp;
