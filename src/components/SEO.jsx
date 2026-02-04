import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Portfolio | Full Stack Developer",
    description = "Modern portfolio website showcasing projects, skills, and experience in web development. Built with React, Tailwind CSS, and Three.js.",
    keywords = "portfolio, web developer, full stack, react, tailwind, software engineer, computer science"
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />

            {/* Additional SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#0f172a" />
            <link rel="canonical" href="https://yourwebsite.com" />
        </Helmet>
    );
};

export default SEO;
