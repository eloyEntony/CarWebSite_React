import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FC } from 'react';

import { Car } from '../../../../../types/car';

import PopularItem from './popularItem';


export interface ISwiperList {
    array: Array<any | Car>
}
const SwiperList:FC<ISwiperList> = ({array}) => {

    const params = {
        modules: [Pagination],
        loop: true,
        grabCursor: true,
        pagination: {
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            768: { slidesPerView: 3 },
            1024: { spaceBetween: 48 },
        },
        spaceBetween: 24,
    };

    return (
        <>
            <Swiper
                {...params}
                slidesPerView={'auto'}
            >
                {array.map(item =>
                    <SwiperSlide key={item.id}>
                        <PopularItem item={item} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );

};

export default SwiperList;