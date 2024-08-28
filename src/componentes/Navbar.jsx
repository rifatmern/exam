// Navbar.js
import React from 'react';
import Container from './Container';

const Navbar = () => {
    return (
        <Container>
            <nav className="p-4">
                <div className="container mx-auto flex justify-center items-center">
                    <ul className="flex space-x-4 text-black font-sans">
                        <li>
                            <a href="/" className="hover:text-gray-600">Home</a>
                        </li>
                        <li>
                            <a href="/shop" className="hover:text-gray-600">Shop</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </Container>

    );
};

export default Navbar;
