import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="h-screen bg-gray-400 flex flex-col items-center justify-center px-5">
            <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
            <form className="flex flex-col gap-4 w-full max-w-md">
                <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none" />
                <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 focus:outline-none" />
                <textarea placeholder="Your Message" rows="4" className="p-3 rounded-lg border border-gray-300 focus:outline-none"></textarea>
                <button type="submit" className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;