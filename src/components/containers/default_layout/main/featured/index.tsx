import { useState } from 'react';
import { ReactMixitup } from 'react-mixitup';
import './featured.css';
const Featured = () => {

    const [keys, setKeys] = useState([1, 2, 3]);


    return (
        <>
            <section className="featured section" id="featured">
                <h2 className="section__title">Featured Luxury Cars</h2>
                <div className="featured__container container">
                    <ul className="featured__filters">
                        <li>
                            <button className="featured__item active-featured" data-filter="all">
                                <span>All</span>
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" data-filter=".tesla">
                                <img src={require('../../../../../assets/img/logo3.png')} alt="" />
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" data-filter=".audi">
                                <img src={require('../../../../../assets/img/logo2.png')} alt="" />
                            </button>
                        </li>
                        <li>
                            <button className="featured__item" data-filter=".porsche">
                                <img src={require('../../../../../assets/img/logo1.png')} alt="" />
                            </button>
                        </li>
                    </ul>

                    <div className="featured__content grid">

                        <button onClick={() => {
                            setKeys(keys[0] === 1 ? [3, 2, 1] : [1, 2, 3]);
                        }}>
                            Mixitup
                        </button>
                        <ReactMixitup
                            keys={keys}
                            renderCell={(key, style, ref) => (
                                <div
                                    key={key}
                                    ref={ref}
                                    style={{
                                        transition: 'transform 300ms linear',
                                        ...style,
                                    }}
                                >
                                    {key}
                                </div>
                            )}
                            renderWrapper={(style, ref, cells) => {
                                return (
                                    <div
                                        style={{
                                            transition: 'height 300ms ease',
                                            display: 'flex',
                                            ...style
                                        }}
                                        ref={ref}
                                    >
                                        {cells}
                                    </div>
                                );
                            }}
                            dynamicDirection="horizontal"
                            transitionDuration={300}
                        />

                        {/* <article className="featured__card mix tesla">
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">Tesla</h1>
                            <h3 className="featured__subtitle">Model X</h3>
                            <img src="assets/img/featured1.png" alt="" className="featured__img"/>
                                <h3 className="featured__price">$98,900</h3>
                                <button className="button featured__button">
                                    <i className="ri-shopping-bag-2-line"></i>
                                </button>
                        </article>
                        <article className="featured__card mix tesla">
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">Tesla</h1>
                            <h3 className="featured__subtitle">Model 3</h3>
                            <img src="assets/img/featured2.png" alt="" className="featured__img"/>
                                <h3 className="featured__price">$45,900</h3>
                                <button className="button featured__button">
                                    <i className="ri-shopping-bag-2-line"></i>
                                </button>
                        </article>
                        <article className="featured__card mix audi">
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">Audi</h1>
                            <h3 className="featured__subtitle">E-tron</h3>
                            <img src="assets/img/featured3.png" alt="" className="featured__img"/>
                                <h3 className="featured__price">$175,900</h3>
                                <button className="button featured__button">
                                    <i className="ri-shopping-bag-2-line"></i>
                                </button>
                        </article>
                        <article className="featured__card mix porsche">
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">Porsche</h1>
                            <h3 className="featured__subtitle">Boxster 987</h3>
                            <img src="assets/img/featured4.png" alt="" className="featured__img"/>
                                <h3 className="featured__price">$126,900</h3>
                                <button className="button featured__button">
                                    <i className="ri-shopping-bag-2-line"></i>
                                </button>
                        </article>
                        <article className="featured__card mix porsche">
                            <div className="shape shape__smaller"></div>
                            <h1 className="featured__title">Porsche</h1>
                            <h3 className="featured__subtitle">Panamera</h3>
                            <img src="assets/img/featured5.png" alt="" className="featured__img"/>
                                <h3 className="featured__price">$126,900</h3>
                                <button className="button featured__button">
                                    <i className="ri-shopping-bag-2-line"></i>
                                </button>
                        </article> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured;