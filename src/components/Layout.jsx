import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >

      <Navbar />

      {children}

      <Footer />

    </div>
  );
}

export default Layout;