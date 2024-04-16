import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const [loading, setLoading] = useState(true);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Render loading spinner while loading */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <HashLoader color="#36d7b7" />
          </div>
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
