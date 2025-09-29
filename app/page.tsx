import React from "react";
import { Header, MobileMenu, Home, About, Projects, Resume, Contact, Footer, TopScroller } from "../Components/index";
import ColorPicker from "@/Components/ColorPicker";

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
