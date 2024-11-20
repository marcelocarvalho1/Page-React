import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Cards from "./components/Cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Ícones sólidos
import { fab } from "@fortawesome/free-brands-svg-icons"; // Ícones de marcas

library.add(fas, fab);



import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Carousel />
      <div className="content">
        <MainContent />
        <Sidebar />
      </div>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
