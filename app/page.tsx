import React from "react";
import { Header, MobileMenu, Home, About, Projects, Resume, Contact, Footer, TopScroller, ColorPicker } from "../components/index";

const HomePage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Header />
            <MobileMenu />
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
            <TopScroller />
            <ColorPicker />
        </div>
    );
};

export default HomePage;
