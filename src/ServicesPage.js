import React from 'react';
import Sidebar from './components/Sidebar';
import { services } from './data';

const categories = [
    { name: 'Super saver packages', key: 0 },
    { name: 'Service', key: 1 },
    { name: 'Repair & gas refill', key: 2 },
    { name: 'Installation/uninstallation', key: 3 },
];

function ServiceCard({ service, onAdd, onClick, cartQty }) {
    return (
        <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-5 mb-6 relative cursor-pointer border border-gray-100 hover:border-purple-500"
            onClick={() => onClick(service)}
        >
            {service.badge && (
                <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                    {service.badge}
                </div>
            )}
            <div className="flex gap-4">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-32 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900 mb-1">{service.title}</div>
                    <div className="flex items-center text-sm mb-1">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-semibold mr-1">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-base font-bold text-gray-800 mb-1">
                        ₹{service.price.toLocaleString()}
                        {service.originalPrice && (
                            <span className="ml-2 line-through text-sm font-normal text-gray-400">
                                ₹{service.originalPrice.toLocaleString()}
                            </span>
                        )}
                        {service.timeRequired && (
                            <span className="ml-2 text-sm text-gray-500">• {service.timeRequired}</span>
                        )}
                    </div>
                    {service.perAcPrice && (
                        <div className="text-green-600 text-sm font-medium">₹{service.perAcPrice} per AC</div>
                    )}
                    {service.highlight && (
                        <div className="text-green-700 text-sm font-medium mt-1">{service.highlight}</div>
                    )}
                    <ul className="list-disc pl-5 text-sm text-gray-700 mt-1 space-y-1">
                        {service.details?.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                    <div className="mt-2">
                        <a
                            href="#"
                            className="text-purple-600 text-sm font-medium hover:underline"
                            onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                onClick(service);
                            }}
                        >
                            View details
                        </a>
                    </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                    {cartQty > 0 ? (
                        <div className="flex items-center gap-2">
                            <button
                                className="w-8 h-8 border border-purple-400 text-purple-700 rounded font-bold text-lg hover:bg-purple-50"
                                onClick={e => {
                                    e.stopPropagation();
                                    onAdd(service, -1);
                                }}
                            >
                                -
                            </button>
                            <span className="w-8 text-center font-semibold">{cartQty}</span>
                            <button
                                className="w-8 h-8 border border-purple-400 text-purple-400 rounded font-bold text-lg bg-gray-100 cursor-not-allowed"
                                disabled
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-medium"
                            onClick={e => {
                                e.stopPropagation();
                                onAdd(service, 1);
                            }}
                        >
                            Add
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function CartSidebarInternal({ cart, onAdd, onViewCart }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.qty, 0);
    const saved = originalTotal - total;

    // WhatsApp message logic
    const waNumber = '919876543210'; // Change to your business number
    const waMessage =
        'Hi, I want to book the following AC services:%0A' +
        cart.map(item => `• ${item.title} x${item.qty} (₹${item.price * item.qty})`).join('%0A') +
        `%0A--------------------%0ATotal: ₹${total}`;
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <aside className="w-80 bg-white shadow rounded p-4 flex flex-col gap-4 sticky top-0 self-start">
            {/* Cart Summary */}
            <div className="mb-2">
                <h3 className="font-bold text-lg mb-1">Cart</h3>
                {cart.length === 0 ? (
                    <div className="text-gray-500">No items in your cart</div>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between mb-2">
                            <span>{item.title}</span>
                            <div className="flex items-center gap-2">
                                <button
                                    className="w-8 h-8 border border-purple-400 text-purple-700 rounded font-bold text-lg hover:bg-purple-50"
                                    onClick={() => onAdd(item, -1)}
                                >-</button>
                                <span className="w-8 text-center font-semibold">{item.qty}</span>
                                <button
                                    className="w-8 h-8 border border-purple-400 text-purple-400 rounded font-bold text-lg bg-gray-100 cursor-not-allowed"
                                    disabled
                                >+</button>
                                <span className="ml-2 font-semibold">₹{item.price}</span>
                                {item.originalPrice ? <span className="ml-1 line-through text-gray-400">₹{item.originalPrice}</span> : null}
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* Discount Banner */}
            {saved > 0 && (
                <div className="bg-green-700 text-white rounded p-2 text-center font-medium">
                    🎉 Congratulations! ₹{saved} saved so far!
                </div>
            )}
            {/* Proceed to Pay Button */}
            <a
                href={cart.length === 0 ? undefined : waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-green-600 text-white px-4 py-2 rounded shadow transition mb-2 text-lg font-semibold flex items-center justify-center gap-2 text-center ${cart.length === 0 ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-green-700'}`}
                style={{ textDecoration: 'none' }}
                aria-disabled={cart.length === 0}
            >
                Enquire Now
            </a>
            {/* Cashback Offer */}
            <div className="bg-green-50 border border-green-200 text-green-900 rounded p-2 text-center text-sm">
                <b>Up to ₹150 Cashback</b><br />Valid for Paytm UPI only
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

function ServicesPage() {
    const [cart, setCart] = React.useState([]);
    const [selectedService, setSelectedService] = React.useState(null);
    const [selectedSidebarIdx, setSelectedSidebarIdx] = React.useState(0);
    const sectionRefs = React.useRef(categories.map(() => React.createRef()));

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) {
                    const topmost = visible.reduce((a, b) =>
                        a.boundingClientRect.top < b.boundingClientRect.top ? a : b
                    );
                    const idx = sectionRefs.current.findIndex(ref => ref.current === topmost.target);
                    if (idx !== -1) setSelectedSidebarIdx(idx);
                }
            },
            { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
        );
        sectionRefs.current.forEach(ref => ref.current && observer.observe(ref.current));
        return () => observer.disconnect();
    }, []);

    const handleAdd = (service, delta) => {
        setCart(prev => {
            const idx = prev.findIndex(item => item.id === service.id);
            if (idx === -1 && delta > 0) {
                return [...prev, { ...service, qty: 1 }];
            } else if (idx !== -1) {
                const updated = [...prev];
                const newQty = updated[idx].qty + delta;
                if (newQty <= 0) {
                    updated.splice(idx, 1);
                } else {
                    updated[idx].qty = newQty;
                }
                return updated;
            }
            return prev;
        });
    };

    const handleSidebarSelect = catIdx => {
        setSelectedSidebarIdx(catIdx);
        setTimeout(() => {
            sectionRefs.current[catIdx].current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const getCartQty = serviceId => {
        const item = cart.find(i => i.id === serviceId);
        return item ? item.qty : 0;
    };

    const handleViewCart = () => {
        alert('Navigating to cart...');
    };

    return (
        <main className="flex gap-6 p-6 max-w-7xl mx-auto">
            <Sidebar selected={selectedSidebarIdx} onSelect={handleSidebarSelect} />
            <div className="flex-1 flex flex-col items-start">
                {categories.map((cat, idx) => (
                    <section key={cat.key} ref={sectionRefs.current[idx]} className="w-full mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">{cat.name}</h2>
                        {selectedService && selectedService.category === cat.key ? (
                            <div className="bg-white p-6 rounded-xl shadow max-w-2xl w-full mx-auto">
                                <button
                                    className="mb-4 text-sm text-gray-500 hover:underline"
                                    onClick={() => setSelectedService(null)}
                                >
                                    ← Back
                                </button>
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
                                <div className="flex items-center text-sm text-gray-700 mb-2">
                                    <span className="text-yellow-500">★</span>
                                    <span className="ml-1 font-semibold">{selectedService.rating}</span>
                                    <span className="ml-1 text-gray-500">({selectedService.reviews} reviews)</span>
                                </div>
                                <div className="text-lg font-semibold mb-1 text-gray-900">
                                    ₹{selectedService.perAcPrice || selectedService.price} per AC
                                </div>
                                <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                                    {selectedService.details.map((d, i) => <li key={i}>{d}</li>)}
                                </ul>
                                <div className="mt-4">
                                    <button
                                        className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 font-medium"
                                        onClick={() => handleAdd(selectedService, 1)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ) : (
                            services.filter(s => s.category === cat.key).map(service => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    onAdd={handleAdd}
                                    onClick={setSelectedService}
                                    cartQty={getCartQty(service.id)}
                                />
                            ))
                        )}
                    </section>
                ))}
            </div>
            <CartSidebarInternal cart={cart} onAdd={handleAdd} onViewCart={handleViewCart} />
        </main>
    );
}

export default ServicesPage;
