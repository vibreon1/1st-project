import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact1/Contact";
import Footer from "./components/footer/Footer";


const App = () => {

    return(
        <>
        <Header />

        <main className="main">
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Contact />
            <Footer />
        </main>
        </>
    )
}

export default App;