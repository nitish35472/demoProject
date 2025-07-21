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
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-3 sm:p-5 mb-4 sm:mb-6 relative cursor-pointer border border-gray-100 hover:border-purple-500"
            onClick={() => onClick(service)}
        >
            {service.badge && (
                <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
                    {service.badge}
                </div>
            )}
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-24 h-20 sm:w-32 sm:h-24 object-cover rounded-xl mx-auto xs:mx-0"
                />
                <div className="flex-1">
                    <div className="font-semibold text-base sm:text-lg text-gray-900 mb-1">{service.title}</div>
                    <div className="flex items-center text-xs sm:text-sm mb-1">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="font-semibold mr-1">{service.rating}</span>
                        <span className="text-gray-500">({service.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap items-center text-sm sm:text-base font-bold text-gray-800 mb-1">
                        ₹{service.price.toLocaleString()}
                        {service.originalPrice && (
                            <span className="ml-2 line-through text-xs sm:text-sm font-normal text-gray-400">
                                ₹{service.originalPrice.toLocaleString()}
                            </span>
                        )}
                        {service.timeRequired && (
                            <span className="ml-2 text-xs sm:text-sm text-gray-500">• {service.timeRequired}</span>
                        )}
                    </div>
                    {service.perAcPrice && (
                        <div className="text-green-600 text-xs sm:text-sm font-medium">₹{service.perAcPrice} per AC</div>
                    )}
                    {service.highlight && (
                        <div className="text-green-700 text-xs sm:text-sm font-medium mt-1">{service.highlight}</div>
                    )}
                    <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm text-gray-700 mt-1 space-y-1">
                        {service.details?.map((d, i) => (
                            <li key={i}>{d}</li>
                        ))}
                    </ul>
                    <div className="mt-2">
                        <a
                            href="#"
                            className="text-purple-600 text-xs sm:text-sm font-medium hover:underline"
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
                <div className="mt-2 xs:mt-0 xs:ml-2 flex flex-row xs:flex-col items-center xs:items-end flex-shrink-0 gap-2 xs:gap-0">
                    {cartQty > 0 ? (
                        <div className="flex flex-row xs:flex-col items-center gap-1 xs:gap-2">
                            <button
                                className="w-8 h-8 xs:w-7 xs:h-7 border border-purple-400 text-purple-700 rounded font-bold text-base hover:bg-purple-50"
                                onClick={e => {
                                    e.stopPropagation();
                                    onAdd(service, -1);
                                }}
                            >
                                -
                            </button>
                            <span className="w-8 xs:w-7 text-center font-semibold text-base xs:text-sm">{cartQty}</span>
                            <button
                                className="w-8 h-8 xs:w-7 xs:h-7 border border-purple-400 text-purple-400 rounded font-bold text-base bg-gray-100 cursor-not-allowed"
                                disabled
                            >
                                +
                            </button>
                        </div>
                    ) : (
                        <button
                            className="px-4 py-2 xs:px-3 xs:py-1 bg-purple-600 text-white rounded hover:bg-purple-700 font-medium text-sm"
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

function CartSidebar({ cart, onAdd, onViewCart }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.qty, 0);
    const saved = originalTotal - total;

    return (
        <aside className="w-80 bg-white rounded-2xl shadow-lg p-4 sticky top-6 self-start">
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
            {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">No items added yet.</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-800">{item.title}</p>
                            <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="w-6 h-6 text-purple-700 border border-purple-400 rounded hover:bg-purple-50 font-bold"
                                onClick={() => onAdd(item, -1)}
                            >
                                -
                            </button>
                            <span className="text-sm font-semibold">{item.qty}</span>
                            <button
                                className="w-6 h-6 text-purple-400 border border-purple-400 rounded bg-gray-100 cursor-not-allowed font-bold"
                                disabled
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}
            {saved > 0 && (
                <div className="mt-4 p-2 text-sm bg-green-100 border border-green-200 rounded text-green-800 font-medium">
                    🎉 You saved ₹{saved}!
                </div>
            )}
            <button
                onClick={onViewCart}
                className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded shadow"
            >
                Proceed to Pay ₹{total}
            </button>
        </aside>
    );
}

function ServicesPage() {
    const [cart, setCart] = React.useState([]);
    const [selectedService, setSelectedService] = React.useState(null);
    const [selectedSidebarIdx, setSelectedSidebarIdx] = React.useState(0);
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false);
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
        <main className="flex flex-col md:flex-row gap-4 md:gap-6 p-2 sm:p-4 md:p-6 max-w-full md:max-w-7xl mx-auto relative pb-20 md:pb-0">
            {/* Sidebar toggle for mobile */}
            <button
                className="md:hidden fixed top-20 left-2 z-40 bg-white border border-gray-300 rounded-full p-2 shadow w-12 h-12 flex items-center justify-center"
                style={{ left: 'max(0.5rem, env(safe-area-inset-left))' }}
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <span className="text-xl">☰</span>
            </button>
            {/* Cart toggle for mobile */}
            <button
                className="md:hidden fixed top-20 right-2 z-40 bg-white border border-gray-300 rounded-full p-2 shadow w-12 h-12 flex items-center justify-center"
                style={{ right: 'max(0.5rem, env(safe-area-inset-right))' }}
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
            >
                <span className="text-xl">🛒</span>
            </button>
            {/* Sidebar (hidden on mobile, modal on mobile) */}
            <div className="hidden md:block">
                <Sidebar selected={selectedSidebarIdx} onSelect={handleSidebarSelect} />
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex md:hidden" onClick={() => setSidebarOpen(false)}>
                    <div className="bg-white w-4/5 max-w-xs h-full shadow-lg p-2" onClick={e => e.stopPropagation()}>
                        <button className="mb-4 text-gray-500" onClick={() => setSidebarOpen(false)}>&larr; Close</button>
                        <Sidebar selected={selectedSidebarIdx} onSelect={idx => { handleSidebarSelect(idx); setSidebarOpen(false); }} />
                    </div>
                </div>
            )}
            {/* Main content */}
            <div className="flex-1 flex flex-col items-start w-full">
                {categories.map((cat, idx) => (
                    <section key={cat.key} ref={sectionRefs.current[idx]} className="w-full mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 border-b pb-2">{cat.name}</h2>
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
            {/* CartSidebar (hidden on mobile, modal on mobile) */}
            <div className="hidden md:block">
                <CartSidebar cart={cart} onAdd={handleAdd} onViewCart={handleViewCart} />
            </div>
            {cartOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex md:hidden" onClick={() => setCartOpen(false)}>
                    <div className="bg-white w-4/5 max-w-xs h-full shadow-lg p-2 ml-auto" onClick={e => e.stopPropagation()}>
                        <button className="mb-4 text-gray-500" onClick={() => setCartOpen(false)}>&larr; Close</button>
                        <CartSidebar cart={cart} onAdd={handleAdd} onViewCart={handleViewCart} />
                    </div>
                </div>
            )}
        </main>
    );
}

export default ServicesPage;
