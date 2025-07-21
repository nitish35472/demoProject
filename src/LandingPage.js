import React from 'react';

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <h1 className="text-4xl font-bold mb-4">Welcome to UrbanCool AC Services</h1>
            <p className="text-lg text-gray-600 mb-8">Book trusted AC service, repair, and installation at your doorstep.</p>
            <a href="/services" className="bg-blue-600 text-white px-8 py-3 rounded shadow hover:bg-blue-700 transition text-lg font-semibold">View Services</a>
        </div>
    );
}

export default LandingPage; 