import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div id="contact" className="w-full min-h-screen bg-black/20 backdrop-blur-sm p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-accent/20 rounded-full text-accent">
                                <FaEnvelope size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Email</h4>
                                <a
                                    href="mailto:thakurkaushal2424@gmail.com"
                                    className="text-gray-400 hover:text-accent transition-colors duration-300 underline"
                                >
                                    thakurkaushal2424@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-accent/20 rounded-full text-accent">
                                <FaMapMarkerAlt size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Location</h4>
                                <p className="text-gray-400">Munger, Bihar, INDIA</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex justify-center items-center md:w-1/2">
                        <form action="https://formspree.io/f/mqelrgzy" method="POST" className="flex flex-col w-full md:w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-accent duration-200"
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-accent duration-200"
                            />
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                rows="10"
                                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-accent duration-200"
                            ></textarea>

                            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                                Let's Talk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
