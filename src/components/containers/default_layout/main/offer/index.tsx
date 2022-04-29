import { Link } from 'react-router-dom';

// import './offer.css';

const Offer = () => {
    return (
        <>
            <section className="offer section">
                <div className="offer__container container grid">
                    <img src={require('../../../../../assets/img/offer-bg.png')} alt="" className="offer__bg" />

                    <div className="offer__data">
                        <h2 className="section__title offer__title">
                            Do You Want To Receive <br /> Special Offers?
                        </h2>
                        <p className="offer__description">
                            Be the first to receive all the information about our
                            products and new cars by email by subscribing to our
                            mailing list.
                        </p>
                        <Link to="#" className="button">
                            Subscribe Now
                        </Link>
                    </div>

                    <img src={require('../../../../../assets/img/offer.png')} alt="" className="offer__img" />
                </div>
            </section>
        </>
    );
};

export default Offer;