import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '@/components/SlickSliderComponent/CustomArrows';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

const SlickSliderComponent = (props) => {
    const settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        ...props,
    };
    return <SlickSlider {...settings}>{props.children}</SlickSlider>;
};

export default SlickSliderComponent;
