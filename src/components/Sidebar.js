import React from 'react';

const categories = [
    { name: 'Super saver packages', icon: '💸' },
    { name: 'Service', icon: '🛠️' },
    { name: 'Repair & gas refill', icon: '🔧' },
    { name: 'Installation/uninstallation', icon: '🏗️' },
];

function Sidebar({ selected, onSelect }) {
    return (
        <aside className="w-80 min-w-[320px] sticky top-0 self-start h-fit bg-transparent flex flex-col gap-6 p-0">
            {/* Heading and rating */}
            <div className="pt-6 pb-2 px-6">
                <h1 className="text-3xl font-bold mb-2">AC Repair & Service</h1>
                <div className="flex items-center gap-2 text-lg mb-2">
                    <span className="text-purple-600 text-xl">★</span>
                    <span className="font-semibold">4.76</span>
                    <span className="text-gray-500">(10.9 M bookings)</span>
                </div>
            </div>
            {/* UC Cover card */}
            <div className="mx-6 mb-2 bg-green-50 border border-green-200 rounded-lg flex items-center p-4 gap-3">
                <span className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold">✓</span>
                <div>
                    <div className="font-semibold text-green-900 text-base">AC Repair & Service</div>
                    <div className="text-gray-700 text-sm">Upto 30 days warranty on repairs</div>
                </div>
            </div>
            {/* Service categories */}
            <div className="mx-6 bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-4">
                <div className="font-medium text-gray-700 mb-2">Select a service</div>
                <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            className={`flex flex-col items-center gap-2 px-2 py-3 rounded-lg border transition font-medium text-center text-xs min-h-[56px] break-words w-full ${selected === idx ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}
                            onClick={() => onSelect(idx)}
                        >
                            <span className="text-3xl">{cat.icon}</span>
                            <span className="block w-full text-xs break-words text-center">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar; 