import React from 'react';
import BlogSection from './Blog/BlogSection';
import HeroSection from './Blog/HeroSection';
import TestimonialSection from './Blog/TestimonialSection';
import Footer from './Footer';

function Blog(){
    return(
        <div>
            <HeroSection />
            <BlogSection />
            <TestimonialSection />
            <Footer />
        </div>
    )
}

export default Blog;