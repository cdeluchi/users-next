import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="link to font" rel="../styles/globals.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default App;
