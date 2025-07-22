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
            className="relative rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition p-4 sm:p-6 mb-5 flex flex-col gap-3"
            onClick={() => onClick(service)}
        >
            {/* Image and badge */}
            <div className="relative flex justify-center items-center mb-3">
                <div className="relative aspect-[4/3] w-full max-w-[120px] sm:max-w-[128px] bg-gray-50 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    {service.badge && (
                        <div className="absolute -top-3 -left-3 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-xl shadow-md z-10">
                            {service.badge}
                        </div>
                    )}
                </div>
            </div>
            <hr className="my-2 border-gray-200" />
            {/* Details */}
            <div className="flex-1 flex flex-col gap-1">
                <div className="font-extrabold text-lg sm:text-xl text-gray-900 mb-1 leading-tight">{service.title}</div>
                <div className="flex items-center text-xs sm:text-sm mb-1 gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-purple-50 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">
                        ₹{service.price.toLocaleString()}
                    </span>
                    {service.originalPrice && (
                        <span className="line-through text-xs font-normal text-gray-400">
                            ₹{service.originalPrice.toLocaleString()}
                        </span>
                    )}
                    {service.timeRequired && (
                        <span className="text-xs text-gray-500">• {service.timeRequired}</span>
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
            {/* Add/Qty Controls */}
            <div className="mt-3">
                {cartQty > 0 ? (
                    <div className="flex flex-row xs:flex-col items-center gap-2 w-full">
                        <button
                            className="w-9 h-9 border border-purple-400 text-purple-700 rounded-xl font-bold text-base hover:bg-purple-50"
                            onClick={e => {
                                e.stopPropagation();
                                onAdd(service, -1);
                            }}
                        >
                            -
                        </button>
                        <span className="w-9 text-center font-semibold text-base">{cartQty}</span>
                        <button
                            className="w-9 h-9 border border-purple-400 text-purple-400 rounded-xl font-bold text-base bg-gray-100 cursor-not-allowed"
                            disabled
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <button
                        className="w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-bold text-base shadow-md mt-1"
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
    );
}

function CartSidebarInternal({ cart, onAdd, onViewCart }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.qty, 0);
    const saved = originalTotal - total;

    // WhatsApp message logic
    const waNumber = '917696731109'; // Change to your business number
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
                        <div key={item.id} className="mb-4 pb-2 border-b border-gray-100 last:border-b-0 last:mb-0">
                            <div className="font-semibold text-sm text-gray-900 mb-1">{item.title}</div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-1">
                                <div className="flex items-center gap-2 justify-center">
                                    <button
                                        className="w-7 h-7 border border-purple-400 text-purple-700 rounded font-bold text-base hover:bg-purple-50"
                                        onClick={() => onAdd(item, -1)}
                                    >-</button>
                                    <span className="w-7 text-center font-semibold text-sm">{item.qty}</span>
                                    <button
                                        className="w-7 h-7 border border-purple-400 text-purple-400 rounded font-bold text-base bg-gray-100 cursor-not-allowed"
                                        disabled
                                    >+</button>
                                </div>
                                <div className="flex flex-col items-center sm:items-end min-w-[60px] mt-2 sm:mt-0">
                                    <span className="font-bold text-sm text-gray-900">₹{item.price}</span>
                                    {item.originalPrice ? (
                                        <span className="line-through text-xs text-gray-400">₹{item.originalPrice}</span>
                                    ) : null}
                                </div>
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
            <div className="mt-4">
                <h4 className="font-semibold mb-2">Our Promise</h4>
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
                {cart.length > 0 && (
                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center animate-bounce" style={{ fontSize: '0.75rem' }}>
                        {cart.length}
                    </span>
                )}
            </button>
            {/* Sidebar (hidden on mobile, modal on mobile) */}
            <div className="hidden md:block md:w-[320px] md:mr-6">
                <div className="sticky top-24">
                    <Sidebar selected={selectedSidebarIdx} onSelect={handleSidebarSelect} />
                </div>
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
            <div className="hidden md:block md:w-[320px] md:ml-6">
                <div className="sticky top-24">
                    <CartSidebarInternal cart={cart} onAdd={handleAdd} onViewCart={handleViewCart} />
                </div>
            </div>
            {cartOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex md:hidden" onClick={() => setCartOpen(false)}>
                    <div className="bg-white/95 w-4/5 max-w-xs h-full shadow-2xl p-0 ml-auto max-h-screen overflow-y-auto rounded-2xl flex flex-col gap-4 px-2" onClick={e => e.stopPropagation()}>
                        {/* Header with close */}
                        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-gray-200">
                            <h3 className="font-bold text-lg">Cart</h3>
                            <button className="text-gray-500 text-xl" onClick={() => setCartOpen(false)} aria-label="Close cart">&larr; Close</button>
                        </div>
                        <div className="flex-1 flex flex-col gap-4 px-2 pb-4">
                            <CartSidebarInternal cart={cart} onAdd={handleAdd} onViewCart={handleViewCart} />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default ServicesPage;
