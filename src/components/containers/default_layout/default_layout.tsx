import Footer from './footer';
import Header from './header';
import About from './main/about';
import Featured from './main/featured';
import Features from './main/features';
import Home from './main/home';
import Logos from './main/logos';
import Offer from './main/offer';
import Popular from './main/popular';
import ScrollUp from './main/scrollUp';

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Popular />
            <Features />
            <Featured />
            <Offer />
            <Logos />
            <Footer />
            <ScrollUp/>
        </>
    );
};

export default DefaultLayout;