import classNames from 'classnames';
import { useEffect } from 'react';

const Filter = ({ activeBrand, setActiveBrand, setFiltered, data }: any) => {
    useEffect(() => {
        if (activeBrand === 'All') {
            setFiltered(data);
            return;
        }
        // const filtered = data.filter((item: any) => item.genre_ids.includes(activeBrand));
        const filtered = data.filter((item: any) => item.name == activeBrand);

        setFiltered(filtered);
    }, [activeBrand]);

    return (
        <>
            <ul className="featured__filters">
                <li>
                    <button
                        className={classNames('featured__item', { ' active-featured': activeBrand === 'All' })}
                        onClick={() => setActiveBrand('All')}
                    >
                        <span>All</span>
                    </button>
                </li>
                <li>
                    <button
                        className={classNames('featured__item', { ' active-featured': activeBrand === 'Tesla' })}
                        onClick={() => setActiveBrand('Tesla')}
                    >
                        <img src={require('../../../../../assets/img/logo3.png')} alt="" />
                    </button>
                </li>
                <li>
                    <button
                        className={classNames('featured__item', { ' active-featured': activeBrand === 'Audi' })}
                        onClick={() => setActiveBrand('Audi')}
                    >
                        <img src={require('../../../../../assets/img/logo2.png')} alt="" />
                    </button>
                </li>
                <li>
                    <button
                        className={classNames('featured__item', { ' active-featured': activeBrand === 'Porsche' })}
                        onClick={() => setActiveBrand('Porsche')}
                    >
                        <img src={require('../../../../../assets/img/logo1.png')} alt="" />
                    </button>
                </li>
            </ul>
        </>

    );
};

export default Filter;