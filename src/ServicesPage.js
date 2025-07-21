import React from 'react';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';
import { services } from './data';

const categories = [
    { name: 'Super saver packages', key: 0 },
    { name: 'Service', key: 1 },
    { name: 'Repair & gas refill', key: 2 },
    { name: 'Installation/uninstallation', key: 3 },
];

function ServiceCard({ service, onAdd, onClick, cartQty }) {
    return (
        <div className="flex bg-white shadow rounded-lg p-4 mb-6 items-center relative cursor-pointer" onClick={() => onClick(service)}>
            {service.badge && (
                <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded z-10">
                    {service.badge}
                </div>
            )}
            <img src={service.image} alt={service.title} className="w-32 h-24 object-cover rounded ml-2 mr-6" />
            <div className="flex-1">
                <div className="font-semibold text-lg mb-1">{service.title}</div>
                <div className="flex items-center text-sm mb-1">
                    <span className="text-purple-600 mr-1">★</span>
                    <span className="font-semibold mr-1">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-base mb-1">
                    <span className="font-bold mr-2">₹{service.price.toLocaleString()}</span>
                    {service.originalPrice ? <span className="line-through text-gray-400 mr-2">₹{service.originalPrice.toLocaleString()}</span> : null}
                    {service.timeRequired && <span className="text-gray-500">• {service.timeRequired}</span>}
                </div>
                {service.perAcPrice && <div className="text-green-700 text-sm mb-1">₹{service.perAcPrice} per AC</div>}
                {service.highlight && <div className="text-green-700 text-sm mb-1">{service.highlight}</div>}
                <ul className="list-disc pl-5 text-gray-700 text-sm mb-1">
                    {service.details && service.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                <a
                    href="#"
                    className="text-purple-700 text-sm font-medium hover:underline"
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClick(service);
                    }}
                >
                    View details
                </a>
            </div>
            {cartQty > 0 ? (
                <div className="flex items-center gap-2 ml-6">
                    <button
                        className="w-8 h-8 border border-purple-400 text-purple-700 rounded font-bold text-lg hover:bg-purple-50"
                        onClick={e => { e.stopPropagation(); onAdd(service, -1); }}
                    >-</button>
                    <span className="w-8 text-center font-semibold">{cartQty}</span>
                    <button
                        className="w-8 h-8 border border-purple-400 text-purple-400 rounded font-bold text-lg bg-gray-100 cursor-not-allowed"
                        disabled
                    >+</button>
                </div>
            ) : (
                <button
                    className="ml-6 px-6 py-2 border border-purple-500 text-purple-700 rounded hover:bg-purple-50 font-medium"
                    onClick={e => { e.stopPropagation(); onAdd(service, 1); }}
                >
                    Add
                </button>
            )}
        </div>
    );
}

function ServiceDetailView({ service, onBack, onAdd, cartQty }) {
    const isServiceCategory = service.category === 1;
    return (
        <div className="bg-white shadow rounded-lg p-6 w-full max-w-2xl mx-auto">
            <button className="mb-4 text-sm text-gray-500 hover:underline" onClick={onBack}>&larr; Back</button>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded mb-4" />
            <div className="font-bold text-2xl mb-2">{service.title.replace(/\(\d+ ACs?\)/, 'AC service')}</div>
            <div className="flex items-center text-sm mb-2">
                <span className="text-purple-600 mr-1">★</span>
                <span className="font-semibold mr-1">{service.rating}</span>
                <span className="text-gray-500">({service.reviews} reviews)</span>
            </div>
            {isServiceCategory ? (
                <>
                    <div className="flex items-center mb-2">
                        <span className="font-bold text-lg mr-2">Starts at ₹{service.price}</span>
                        <span className="text-gray-500">{service.options} options</span>
                    </div>
                    <div className="text-green-700 text-sm mb-2">{service.highlight}</div>
                </>
            ) : (
                <div className="flex items-center mb-2">
                    <span className="font-bold text-lg mr-2">Starts at ₹{service.perAcPrice}</span>
                    <span className="text-gray-500">6 options</span>
                </div>
            )}
            <ul className="list-disc pl-5 text-gray-700 text-sm mb-2">
                {service.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {/* Hide View details link in detail view */}
            {cartQty > 0 ? (
                <div className="flex items-center gap-2 mt-4">
                    <button
                        className="w-8 h-8 border border-purple-400 text-purple-700 rounded font-bold text-lg hover:bg-purple-50"
                        onClick={() => onAdd(service, -1)}
                    >-</button>
                    <span className="w-8 text-center font-semibold">{cartQty}</span>
                    <button
                        className="w-8 h-8 border border-purple-400 text-purple-400 rounded font-bold text-lg bg-gray-100 cursor-not-allowed"
                        disabled
                    >+</button>
                </div>
            ) : (
                <button
                    className="mt-4 px-6 py-2 border border-purple-500 text-purple-700 rounded hover:bg-purple-50 font-medium"
                    onClick={() => onAdd(service, 1)}
                >
                    Add
                </button>
            )}
        </div>
    );
}

function CartSidebarInternal({ cart, onAdd, onViewCart }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.qty, 0);
    const saved = originalTotal - total;
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
                                {/* - and + buttons, + is disabled, - removes item */}
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
            {/* View Cart Button */}
            <button
                className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 transition mb-2 text-lg font-semibold flex items-center justify-center gap-2"
                onClick={onViewCart}
            >
                ₹{total} {originalTotal > total && <span className="ml-2 line-through text-gray-200 text-base">₹{originalTotal}</span>} View Cart
            </button>
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

    // Intersection Observer to auto-highlight sidebar
    React.useEffect(() => {
        const handleIntersect = (entries) => {
            const visible = entries.filter(e => e.isIntersecting);
            if (visible.length > 0) {
                // Find the topmost visible section
                const topmost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
                const idx = sectionRefs.current.findIndex(ref => ref.current === topmost.target);
                if (idx !== -1) setSelectedSidebarIdx(idx);
            }
        };
        const observer = new window.IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '-100px 0px -60% 0px', // triggers a bit before the section top
            threshold: 0.1,
        });
        sectionRefs.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
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

    const handleViewCart = () => {
        window.location.href = '/cart';
    };

    const handleSidebarSelect = (catIdx) => {
        setSelectedSidebarIdx(catIdx);
        setTimeout(() => {
            if (sectionRefs.current[catIdx].current) {
                sectionRefs.current[catIdx].current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // For each service, get its quantity in cart
    const getCartQty = (serviceId) => {
        const item = cart.find(i => i.id === serviceId);
        return item ? item.qty : 0;
    };

    return (
        <main className="flex flex-1 gap-6 p-6 max-w-7xl mx-auto w-full">
            <Sidebar selected={selectedSidebarIdx} onSelect={handleSidebarSelect} />
            <div className="flex-1 flex flex-col items-start">
                {categories.map((cat, idx) => (
                    <section key={cat.key} ref={sectionRefs.current[idx]} className="w-full mb-10">
                        <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
                        {selectedService && selectedService.category === cat.key ? (
                            <ServiceDetailView service={selectedService} onBack={() => setSelectedService(null)} onAdd={handleAdd} cartQty={getCartQty(selectedService.id)} />
                        ) : (
                            services.filter(s => s.category === cat.key).map(service => (
                                <ServiceCard key={service.id} service={service} onAdd={handleAdd} onClick={setSelectedService} cartQty={getCartQty(service.id)} />
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