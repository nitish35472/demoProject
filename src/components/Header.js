import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
            {/* Logo */}
            <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-4">UrbanCool</span>
            </div>
            {/* Tabs */}
            <nav className="flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-lg font-medium px-3 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        `text-lg font-medium px-3 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`
                    }
                >
                    Services
                </NavLink>
            </nav>
            {/* Location Selector */}
            {/* <div className="flex items-center bg-gray-100 rounded px-3 py-1 mr-4">
                <span className="material-icons mr-2 text-gray-500">location_on</span>
                <span className="text-sm font-medium">Connaught Place, New Delhi</span>
            </div> */}
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
                <input
                    type="text"
                    placeholder="Search in AC Service & Repair"
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </header>
    );
}

export default Header; 