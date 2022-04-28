import { motion } from 'framer-motion';
import { FC } from 'react';

import ShoppingBagLineIcon from 'remixicon-react/ShoppingBag2LineIcon';

import { FeaturedCar } from '../../../../../types/car';

// import './featured.css';

export interface IFeaturedItem {
    item: FeaturedCar | any
}

const FeaturedItem: FC<IFeaturedItem> = ({ item }) => {
    return (
        <>
            <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" /> */}
                <article className="featured__card">
                    <div className="shape shape__smaller"></div>
                    <h1 className="featured__title">{item.name}</h1>
                    <h3 className="featured__subtitle">{item.model}</h3>
                    <img src={require(`../../../../../assets/img/${item.img}`)} alt={item.img} className="featured__img" />
                    <h3 className="featured__price">{item.price}</h3>
                    <button className="button featured__button">
                        <ShoppingBagLineIcon />
                    </button>
                </article>
            </motion.div>
        </>
    );
};

export default FeaturedItem;
