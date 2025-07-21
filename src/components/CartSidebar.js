import React from 'react';

function CartSidebar({ cart, total, onViewCart }) {
    return (
        <aside className="w-full md:w-80 bg-white shadow rounded p-3 md:p-4 flex flex-col gap-3 md:gap-4">
            {/* Cart Summary */}
            <div className="mb-1 md:mb-2">
                <h3 className="font-bold text-base md:text-lg mb-1">Cart</h3>
                <div className="text-xs md:text-sm text-gray-700">{cart.length} service(s)</div>
                <div className="font-bold text-blue-600 text-lg md:text-xl">₹{total}</div>
            </div>
            {/* Discount Banner */}
            <div className="bg-green-100 text-green-800 rounded p-1 md:p-2 text-center font-medium text-xs md:text-base">
                🎉 Congratulations! ₹200 saved so far!
            </div>
            {/* View Cart Button */}
            <button
                className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded shadow hover:bg-blue-700 transition mb-1 md:mb-2 text-sm md:text-base"
                onClick={onViewCart}
            >
                View Cart
            </button>
            {/* Cashback Offer */}
            <div className="bg-yellow-100 text-yellow-800 rounded p-1 md:p-2 text-center text-xs md:text-sm">
                💸 Up to ₹150 Cashback on UPI payment
            </div>
            {/* UC Promise */}
            <div className="mt-2 md:mt-4">
                <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">UC Promise</h4>
                <ul className="space-y-1 text-xs md:text-sm">
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Verified Professionals</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Hassle-Free Booking</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">✔️</span> Transparent Pricing</li>
                </ul>
            </div>
        </aside>
    );
}

export default CartSidebar; 