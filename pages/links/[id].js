import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((link) => {
    return {
      params: { id: link.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { link: data },
  };
};

const Details = ({ link }) => {
  return (
    <div className="contentDetails">
      <h1>{link.name}</h1>
      <p>{link.email}</p>
      <p>{link.website}</p>
      <p>{link.address.city}</p>
    </div>
  );
};

export default Details;

// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const registry = new SheetsRegistry();
//     const generateId = createGenerateId();
//     const originalRenderPage = ctx.renderPage;
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => (
//           <JssProvider registry={registry} generateId={generateId}>
//             <App {...props} />
//           </JssProvider>
//         ),
//       });
//     const initialProps = await Document.getInitialProps(ctx);
//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           <style id="server-side-styles">{registry.toString()}</style>
//         </>
//       ),
//     };
//   }
