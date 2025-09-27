import React from "react";
import { Header, MobileMenu, Home, About, Projects, Resume } from "../Components/index";

const HomePage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Header />
            <MobileMenu />
            <Home />
            <About />
            <Resume />
            <Projects />
        </div>
    );
};

export default HomePage;
