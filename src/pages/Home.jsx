import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;