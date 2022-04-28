import array from './data.json';
import SwiperList from './swiperList';

import './popular.css';

const Popular = () => {
    return (
        <section className="popular section" id="popular">
            <h2 className="section__title">
                Choose Your Electric Car <br /> Of The Porsche Brand
            </h2>
            <div className="popular__container container">
                <SwiperList array={array.data} />
            </div>
        </section>
    );
};

export default Popular;