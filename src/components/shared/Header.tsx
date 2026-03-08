import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ─── Logged-Out Header ─────────────────────────────────────────────────────
export function LoggedOutHeader() {
    return (
        <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between w-full">
                {/* Logo */}
                <Link to="/" className="no-underline flex items-center gap-2.5 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 text-primary fill-current shrink-0">
                        <path d="M 30 20 C 10 30, 10 70, 30 80 C 50 90, 70 80, 80 60 C 65 75, 40 75, 25 55 C 15 40, 20 25, 30 20 Z" />
                        <path d="M 70 80 C 90 70, 90 30, 70 20 C 50 10, 30 20, 20 40 C 35 25, 60 25, 75 45 C 85 60, 80 75, 70 80 Z" />
                    </svg>
                    <span className="hidden sm:inline text-xl font-extrabold tracking-tight">
                        <span className="text-black">Open</span> <span className="text-primary">Orbit</span>
                    </span>
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="text-base font-medium text-slate-700 no-underline hover:text-primary transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        to="/"
                        className="bg-primary text-white px-6 py-2.5 rounded-full text-base font-semibold no-underline hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

// ─── Logged-In Header ──────────────────────────────────────────────────────
export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between md:justify-start gap-4 sm:gap-6 w-full">

                {/* Logo — far left */}
                <Link to="/dashboard" className="no-underline flex items-center gap-2.5 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 text-primary fill-current shrink-0">
                        <path d="M 30 20 C 10 30, 10 70, 30 80 C 50 90, 70 80, 80 60 C 65 75, 40 75, 25 55 C 15 40, 20 25, 30 20 Z" />
                        <path d="M 70 80 C 90 70, 90 30, 70 20 C 50 10, 30 20, 20 40 C 35 25, 60 25, 75 45 C 85 60, 80 75, 70 80 Z" />
                    </svg>
                    <span className="hidden sm:inline text-xl font-extrabold tracking-tight">
                        <span className="text-black">Open</span> <span className="text-primary">Orbit</span>
                    </span>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-1 shrink-0">
                    <Link
                        to="/dashboard"
                        className="text-sm font-semibold text-slate-700 no-underline px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-primary transition-all"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/explore"
                        className="text-sm font-semibold text-slate-700 no-underline px-4 py-2 rounded-lg hover:bg-slate-100 hover:text-primary transition-all"
                    >
                        Explore
                    </Link>
                </nav>

                {/* Search Bar — center, grows to fill space */}
                <div className="hidden md:block flex-1 relative max-w-[480px] mx-auto">
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="w-full bg-slate-100 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 border border-transparent focus:outline-none focus:bg-white focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                </div>

                {/* Right: Create Event + Avatar */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-end flex-1 md:flex-none">
                    {/* Create Event CTA */}
                    <button
                        onClick={() => navigate('/create-event')}
                        className="bg-primary text-white text-sm font-semibold w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full hover:bg-primary-dark transition-colors shadow-md shadow-primary/25 border-none cursor-pointer flex items-center justify-center gap-2"
                    >
                        <svg width="13" height="13" viewBox="0 0 12 12" fill="white">
                            <path d="M6.75 1.5V5.25H10.5V6.75H6.75V10.5H5.25V6.75H1.5V5.25H5.25V1.5H6.75Z" />
                        </svg>
                        <span className="hidden sm:inline">Create Event</span>
                    </button>

                    {/* Avatar + Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen((o) => !o)}
                            className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            A
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 top-[calc(100%+10px)] w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden z-50">
                                {/* User Info */}
                                <div className="px-4 py-3 border-b border-slate-100">
                                    <p className="text-sm font-bold text-slate-900">Allen</p>
                                    <p className="text-xs text-slate-500">allen@university.edu</p>
                                </div>

                                {/* Menu Items */}
                                <div className="py-1">
                                    <Link
                                        to="#"
                                        onClick={() => setDropdownOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 no-underline hover:bg-slate-50 transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <Link
                                        to="#"
                                        onClick={() => setDropdownOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 no-underline hover:bg-slate-50 transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        My Events
                                    </Link>
                                    <Link
                                        to="#"
                                        onClick={() => setDropdownOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 no-underline hover:bg-slate-50 transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
                                        </svg>
                                        Settings
                                    </Link>
                                </div>

                                {/* Logout */}
                                <div className="border-t border-slate-100 pt-1">
                                    <button
                                        onClick={() => { setDropdownOpen(false); navigate('/login') }}
                                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors bg-transparent border-none cursor-pointer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                                        </svg>
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
