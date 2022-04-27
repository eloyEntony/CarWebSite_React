import React from 'react';
import TempColdLineIcon from 'remixicon-react/TempColdLineIcon';
import DashboardLineIcon from 'remixicon-react/Dashboard3LineIcon';
import FlashlightFillIcon from 'remixicon-react/FlashlightFillIcon';

import { Link } from 'react-router-dom';

import home from '../../../../../assets/img/home.png';

import './home.css';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="shape shape__big"></div>
            <div className="shape shape__small"></div>
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                        Choose The Best Car
                    </h1>
                    <h2 className="home__subtitle">
                        Porsche Mission E
                    </h2>
                    <h3 className="home__elec">
                        <i className="ri-flashlight-fill"></i>
                        Electric car
                    </h3>
                </div>

                <img src={home} alt="home.png" className="home__img" />

                <div className="home__car">
                    <div className="home__car-data">
                        <div className="home__car-icon">
                            <TempColdLineIcon />
                        </div>
                        <h2 className="home__car-number">24°</h2>
                        <h3 className="home__car-name">TEMPERATURE</h3>
                    </div>

                    <div className="home__car-data">
                        <div className="home__car-icon">
                            <DashboardLineIcon />
                        </div>
                        <h2 className="home__car-number">873</h2>
                        <h3 className="home__car-name">MILEAGE</h3>
                    </div>

                    <div className="home__car-data">
                        <div className="home__car-icon">
                            <FlashlightFillIcon />
                        </div>
                        <h2 className="home__car-number">94%</h2>
                        <h3 className="home__car-name">BATTERY</h3>
                    </div>
                </div>
                <Link to="" className="home__button">START</Link>
            </div>
        </section>
    );
};

export default Home;