import React from "react";
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import Funding from './Funding';
import InfoButtons from "./InfoButtons";
import Sidebar from "./Sidebar";


const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <InfoButtons />
            <Funding />
            <Footer />
            <Sidebar/>
        </div>
    );
}

export default Home;
