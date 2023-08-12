import { Container } from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ShareScreen from "./screens/ShareScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/share/:SYMBOL" element={<ShareScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
