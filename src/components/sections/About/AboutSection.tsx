import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-white" id="about">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
                <p className="text-gray-600">Company history and details.</p>
            </div>
        </section>
    );
};

export default AboutSection;
