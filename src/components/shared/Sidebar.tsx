import { Link } from 'react-router-dom'

const navItems = [
    {
        label: 'Discover',
        path: '/dashboard',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
        ),
    },
    {
        label: 'Events',
        path: '/explore',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
    },
    {
        label: 'Favourites',
        path: '#',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
    {
        label: 'Profile',
        path: '#',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
]

export default function Sidebar() {

    return (
        <aside className="w-[270px] min-h-screen bg-white flex flex-col pt-12 px-8 shadow-sm border-r border-gray-100">
            <h2 className="text-xl font-semibold text-primary mb-16 px-2">Campus Connect</h2>
            <nav className="w-full flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = item.label === 'Events'
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`flex items-center gap-4 px-5 py-4 rounded-xl no-underline transition-all ${isActive
                                ? 'bg-primary text-white shadow-md shadow-primary/20'
                                : 'text-dark hover:bg-primary-light hover:text-primary'
                                }`}
                        >
                            <span className="w-6 h-6">{item.icon}</span>
                            <span className="text-base font-medium">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
