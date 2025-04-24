import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'experience' },
        { id: 6, link: 'contributions' },
        { id: 7, link: 'certifications' },
        { id: 8, link: 'contact' },
    ];
    
    // Function to open resume - Updated to use saras.pdf
    const openResume = () => {
        window.open('/saras.pdf', '_blank');
    };

    return (
        <nav className={`fixed w-full h-16 z-50 flex justify-between items-center px-4 ${scrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'} transition-all duration-300`}>
            <div>
                <h1 className="text-4xl font-signature ml-2 cursor-pointer text-white">
                    <Link to="home" smooth duration={500}>
                        <span className="text-blue-500">S</span>aras
                    </Link>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-white hover:text-blue-500 hover:scale-105 duration-200"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li className="px-4">
                    <button 
                        onClick={openResume}
                        className="text-white border border-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 transition-all duration-300">
                        Resume
                    </button>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-white md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 text-4xl text-center w-full"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth
                                duration={500}
                                className="block w-full text-center"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li className="px-4 py-6 w-full flex justify-center mt-4">
                        <button 
                            onClick={() => {
                                openResume();
                                setNav(false);
                            }}
                            className="text-white border-2 border-blue-500 px-8 py-3 rounded-md hover:bg-blue-500 transition-all duration-300 text-2xl mx-auto"
                        >
                            Resume
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;