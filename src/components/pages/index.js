import React, { useState } from "react";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../InfoSection/Data";
import NavBar from "../NavBar";
import Services from "../Services";
import Sidebar from "../Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
