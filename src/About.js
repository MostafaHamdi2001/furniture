import React from 'react';
import HeroSection from './About/HeroSection';
import Team from './About/Team';
import TestimonialSection from './About/TestimonialSection';
import ChooseSection from './About/ChooseSection';
import Footer from './Footer';
function About() {
    return (
        <div>
            <HeroSection />
            <ChooseSection />
            <Team />
            <TestimonialSection />
            <Footer />
        </div>
    )
}

export default About;