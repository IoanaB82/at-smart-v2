import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

import Container from "@material-ui/core/Container";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Eat smart app</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Container maxWidth="md">
        <Header />

        <main id="main-content">{props.children}</main>
        <Footer />
      </Container>
      <style jsx>{`
        #main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: #fff;
        }

        @media screen and (max-width: 800px) {
          #main-content {
            padding: 0;
          text-align: center;

        }


      `}</style>
    </>
  );
};

export default Layout;
