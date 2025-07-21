import React from 'react';

function ServiceDetails({ service, onAdd }) {
    if (!service) return null;
    return (
        <div className="bg-white shadow rounded p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="font-semibold mr-2">{service.rating}</span>
                <span className="text-gray-500 text-sm">({service.reviews} reviews)</span>
            </div>
            <div className="flex items-center mb-2">
                <span className="text-lg font-bold text-blue-600 mr-2">₹{service.price}</span>
                <span className="line-through text-gray-400 mr-2">₹{service.originalPrice}</span>
                <span className="text-green-600 font-medium">{service.discount} off</span>
            </div>
            <div className="mb-2 text-sm text-gray-600">⏱ {service.timeRequired}</div>
            <ul className="list-disc pl-5 mb-4 text-gray-700">
                {service.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            <button
                className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
                onClick={onAdd}
            >
                Add
            </button>
        </div>
    );
}

export default ServiceDetails; 