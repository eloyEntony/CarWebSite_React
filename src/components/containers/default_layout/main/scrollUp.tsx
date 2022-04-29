import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ArrowUp from 'remixicon-react/ArrowUpLineIcon';

const ScrollUp = () => {

    const [showScroll, setShowScroll] = useState(false);
    const changeVisible = () => {
        if (window.scrollY >= 350) setShowScroll(true);
        else setShowScroll(false);
    };

    useEffect(() => {
        changeVisible();
        window.addEventListener('scroll', changeVisible);
    });

    return (
        <>
            <Link
                className={classNames('scrollup', { 'show-scroll': showScroll })}
                to="home" spy={true}>
                <ArrowUp />
            </Link>

        </>
    );
};

export default ScrollUp;