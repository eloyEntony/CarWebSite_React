import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import array from './data.json';
import FeaturedItem from './featuredItem';
import Filter from './filter';

const Featured = () => {

    const [filtered, setFiltered] = useState([]);
    const [activeBrand, setActiveBrand] = useState('All');

    return (
        <>
            <section className="featured section" id="featured">
                <h2 className="section__title">Featured Luxury Cars</h2>
                <div className="featured__container container">
                    <Filter
                        data={array.data}
                        setFiltered={setFiltered}
                        activeBrand={activeBrand}
                        setActiveBrand={setActiveBrand}
                    />                   

                    <motion.div layout className="featured__content grid">
                        <AnimatePresence>
                            {filtered.map((item:any) => (
                                <FeaturedItem
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>                  
                </div>
            </section>
        </>
    );
};

export default Featured;