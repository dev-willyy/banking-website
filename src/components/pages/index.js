import React, { useState } from "react";
import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function that updates state
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Williams, Check if Toggle is an event */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
        </>
    );
};

export default Home;
// toggle is pased into "NavBar component" as a props & also into the "MobileIcon div" to be triggered upon click
// toggle is also passed into "SidebarContainer "to be triggered upon click & isOpen state is also passed here as well
