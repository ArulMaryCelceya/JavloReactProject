import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            background: "linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url('/images/hero-bg.png') center/cover no-repeat"
        }}>
            <div className="hero-brand">JAVLO HERBAL</div>
            <p>HANDMADE • 100% ORGANIC • AYURVEDIC BOTANICAL CARE</p>
            <h1>Where Nature Becomes Luxury</h1>
            <span>
                Premium handmade organic soaps crafted with love by{' '}
                <strong>Celceya & Family</strong>, proudly made in{' '}
                <strong>Bangalore, India</strong>.
            </span>
            <a href="#products" className="btn">
                DISCOVER OUR SIGNATURE COLLECTION
            </a>
        </section>
    );
};

export default Hero;
