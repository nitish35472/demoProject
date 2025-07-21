import React from 'react';

function CartSidebar({ cart, total, onViewCart }) {
    return (
        <aside className="w-80 bg-white shadow rounded p-4 flex flex-col gap-4">
            {/* Cart Summary */}
            <div className="mb-2">
                <h3 className="font-bold text-lg mb-1">Cart</h3>
                <div className="text-sm text-gray-700">{cart.length} service(s)</div>
                <div className="font-bold text-blue-600 text-xl">₹{total}</div>
            </div>
            {/* Discount Banner */}
            <div className="bg-green-100 text-green-800 rounded p-2 text-center font-medium">
                🎉 Congratulations! ₹200 saved so far!
            </div>
            {/* View Cart Button */}
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mb-2"
                onClick={onViewCart}
            >
                View Cart
            </button>
            {/* Cashback Offer */}
            <div className="bg-yellow-100 text-yellow-800 rounded p-2 text-center text-sm">
                💸 Up to ₹150 Cashback on UPI payment
            </div>
            {/* UC Promise */}
            <div className="mt-4">
                <h4 className="font-semibold mb-2">UC Promise</h4>
                <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Verified Professionals</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Hassle-Free Booking</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Transparent Pricing</li>
                </ul>
            </div>
        </aside>
    );
}

export default CartSidebar; 