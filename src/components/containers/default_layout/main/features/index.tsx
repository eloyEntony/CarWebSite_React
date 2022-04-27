import './features.css';
import map from '../../../../../assets/img/map.svg';

const Features = () => {
    return (
        <>
            <section className="features section">
                <h2 className="section__title">More Features</h2>
                <div className="features__container container grid">
                    <div className="features__group">
                        <img src={require('../../../../../assets/img/features.png')} alt="features" className="features__img" />

                        <div className="features__card features__card-1">
                            <h3 className="features__card-title">800v</h3>
                            <p className="features__card-description">Turbo <br /> Chargin</p>
                        </div>
                        <div className="features__card features__card-2">
                            <h3 className="features__card-title">350</h3>
                            <p className="features__card-description">Km <br /> Range</p>
                        </div>
                        <div className="features__card features__card-3">
                            <h3 className="features__card-title">480</h3>
                            <p className="features__card-description">Km <br /> Travel</p>
                        </div>
                    </div>
                </div>                
                <img src={map} alt="map" className="features__map" />
            </section>
        </>
    );
};

export default Features;