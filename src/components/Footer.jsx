import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
                {/* Left */}
                <p className="text-sm">&copy; {new Date().getFullYear()} SobujDev. All rights reserved.</p>

                {/* Right - Social links */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/Sobuj301" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/sobuj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;