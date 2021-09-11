import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children, presentationMode, noFooter = false }) => {
  return (
    <>
      <Navbar presentationMode={presentationMode} />
      <div className="header-spacer" style={{ height: 60 }} />
      {children}
      {!noFooter && <Footer />}
    </>
  );
};
