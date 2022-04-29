
// import './logos.css';

const Logos = () => {
    return (
        <>
            <section className="logos section">
                <div className="logos__container container grid">
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo1.png')} alt="" className="logos__img" />
                    </div>
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo2.png')} alt="" className="logos__img" />
                    </div>
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo3.png')} alt="" className="logos__img" />
                    </div>
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo4.png')} alt="" className="logos__img" />
                    </div>
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo5.png')} alt="" className="logos__img" />
                    </div>
                    <div className="logos__content">
                        <img src={require('../../../../../assets/img/logo6.png')} alt="" className="logos__img" />
                    </div>
                </div>

            </section>
        </>
    );
};

export default Logos;