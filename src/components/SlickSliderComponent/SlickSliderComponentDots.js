import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/overrides/SliderDots.scss';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

const SlickSliderComponentDots = (props) => {
    const settingsDots = {
        ...props,
    };
    return <SlickSlider {...settingsDots}>{props.children}</SlickSlider>;
};

export default SlickSliderComponentDots;
