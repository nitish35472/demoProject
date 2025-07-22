import React from 'react';

const categories = [
    { name: 'Super saver packages', icon: '💸' },
    { name: 'Service', icon: '🛠️' },
    { name: 'Repair & gas refill', icon: '🔧' },
    { name: 'Installation/uninstallation', icon: '🏗️' },
];

function Sidebar({ selected, onSelect }) {
    return (
        <aside className="w-full md:w-80 min-w-0 md:min-w-[320px] sticky top-0 self-start h-fit bg-transparent flex flex-col gap-6 p-0">
            {/* Heading and rating */}
            <div className="pt-4 pb-2 px-4 md:pt-6 md:pb-2 md:px-6">
                <h1 className="text-xl md:text-3xl font-bold mb-2">AC Repair & Service</h1>
                <div className="flex items-center gap-2 text-base md:text-lg mb-2">
                    <span className="text-purple-600 text-xl">★</span>
                    <span className="font-semibold">4.76</span>
                    <span className="text-gray-500">(10.9 M bookings)</span>
                </div>
            </div>
            {/* UC Cover card */}
            <div className="mx-4 md:mx-6 mb-2 bg-green-50 border border-green-200 rounded-lg flex items-center p-3 md:p-4 gap-3">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">✓</span>
                <div>
                    <div className="font-semibold text-green-900 text-sm md:text-base">AC Repair & Service</div>
                    <div className="text-gray-700 text-xs md:text-sm">Upto 30 days warranty on repairs</div>
                </div>
            </div>
            {/* Service categories */}
            <div className="mx-4 md:mx-6 bg-white/70 border border-gray-200 rounded-2xl p-4 flex flex-col gap-4 backdrop-blur-md shadow-lg">
                <div className="font-semibold text-gray-700 mb-2 text-base md:text-lg">Select a service</div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            className={`relative flex flex-col items-center justify-center gap-2 px-2 py-5 rounded-xl border transition font-semibold text-center text-xs md:text-sm shadow bg-white/90 border-gray-200 hover:scale-105 hover:shadow-lg focus:outline-none ${selected === idx ? 'ring-2 ring-purple-400 bg-purple-50 scale-105' : 'hover:bg-gray-50 text-gray-700'}`}
                            style={{ transition: 'transform 0.15s, box-shadow 0.15s' }}
                            onClick={() => onSelect(idx)}
                        >
                            <span className="text-3xl md:text-4xl drop-shadow-sm">{cat.icon}</span>
                            <span className="block w-full text-xs md:text-sm break-words text-center font-semibold">{cat.name}</span>
                            {selected === idx && (
                                <span className="absolute top-2 right-2 animate-bounce">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#a78bfa" /><path d="M6 10.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar; 