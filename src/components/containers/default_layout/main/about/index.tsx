import { Link } from 'react-router-dom';

import about from '../../../../../assets/img/about.png';

// import './about.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__group">
                    <img src={about} alt="about.png" className="about__img"/>
                        <div className="about__card">
                            <h3 className="about__card-title">2500+</h3>
                            <p className="about__card-description">
                                Superschargers placed along popular routes
                            </p>
                        </div>
                </div>
                <div className="about__data">
                    <h2 className="section__title about__title">
                        Machines With <br/> Future Technology
                    </h2>
                    <p className="about__decsription">
                        See the future with high-performance electric cars produced by
                        renowned brands. They feature futuristic builds and designs with
                        new and innovative platforms that last a long time.
                    </p>

                    <Link to="#" className="button">Know more</Link>
                </div>
            </div>
        </section>
    );
};

export default About;