import { useTransform, motion, useViewportScroll } from 'framer-motion';


import Footer from './footer';
import Header from './header';
import About from './main/about';
import Featured from './main/featured';
import Features from './main/features';
import Home from './main/home';
import Logos from './main/logos';
import Offer from './main/offer';
import Popular from './main/popular';

const DefaultLayout = () => {

    // const { scrollY } = useViewportScroll();
    // const offsetY = [0, 50];

    return (
        <>
            <Header/>
            <Home />
            <About />
            <Popular />
            <Features />
            <Featured />
            <Offer />
            <Logos />
            <Footer />
        </>
    );
};

export default DefaultLayout;