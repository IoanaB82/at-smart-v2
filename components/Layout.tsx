import Footer from "./Footer";
import Header from "./Header";

import Container from "@material-ui/core/Container";

const Layout = (props) => {
  return (
    <>
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
      `}</style>
    </>
  );
};

export default Layout;
