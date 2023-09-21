import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackgroundImages from "./components/BackgroundImages";
import { PortfolioProvider } from "./context/PortfolioContext";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <BackgroundImages />
              </>
            }
          />

          <Route path="/about" element={<About isSelected={"selected"} />} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </PortfolioProvider>
  );
}

export default App;
