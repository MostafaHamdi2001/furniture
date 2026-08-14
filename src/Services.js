import react from 'react';
import ProductSection from './Services/ProductSection';
import Slider from './Services/Slider';
import HeroSection from './Services/HeroSection';
import ChooseSection from './Services/ChooseSection';
import Footer from './Footer';
function Services() {
    return (
        <div>
            <HeroSection />
            <ProductSection />
            <ChooseSection />
            <Slider />
            <Footer />
        </div>
    )
}

export default Services;