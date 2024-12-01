import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Explore Türkiye</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Tours</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;