import DashboardLineIcon from 'remixicon-react/Dashboard3LineIcon';
import FundsBoxLineIcon from 'remixicon-react/FundsBoxLineIcon';
import ChargingPileLineIcon from 'remixicon-react/ChargingPile2LineIcon';
import ShoppingBagLineIcon from 'remixicon-react/ShoppingBag2LineIcon';

import { FC } from 'react';

import { Car } from '../../../../../types/car';

export interface IPopularCarItem {
    item: Car
}

const PopularItem: FC<IPopularCarItem> = ({ item }) => {
    return (
        <article className="popular__card" key={item.id}>
            <div className="shape shape__smaller"></div>
            <h1 className="popular__title">{item.title}</h1>
            <h3 className="popular__subtitle">{item.subtitle}</h3>

            <img src={require(`../../../../../assets/img/${item.img}`)} alt={item.img} className="popular__img" />

            <div className="popular__data">
                <div className="popular__data-group">
                    <DashboardLineIcon /> {item.dashboard__data}
                </div>
                <div className="popular__data-group">
                    <FundsBoxLineIcon /> {item.speed}
                </div>
                <div className="popular__data-group">
                    <ChargingPileLineIcon /> {item.type}
                </div>
            </div>

            <h3 className="popular__price">{item.price}</h3>
            <button className="button popular__button">
                <ShoppingBagLineIcon />
            </button>
        </article>

    );
};

export default PopularItem;