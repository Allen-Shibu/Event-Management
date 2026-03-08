export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 relative overflow-hidden">
            {/* Background blurs */}
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Main Content Area */}
            <div className="w-full max-w-[520px] flex flex-col items-center relative z-10 my-auto">
                {/* Logo */}
                <div className="flex items-center gap-4 mb-12">
                    <svg width="40" height="32" viewBox="0 0 33 27" fill="#2B8CEE">
                        <path d="M16.5 27L6 21.3V12.3L0 9L16.5 0L33 9V21H30V10.65L27 12.3V21.3L16.5 27ZM16.5 14.55L26.775 9L16.5 3.45L6.225 9L16.5 14.55ZM16.5 23.5875L24 19.5375V13.875L16.5 18L9 13.875V19.5375L16.5 23.5875Z" />
                    </svg>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">CampusEvents</h2>
                </div>

                {/* Card */}
                <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    {/* Blue Header */}
                    <div className="bg-primary flex items-center justify-center py-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
                        <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-md shadow-inner">
                            <svg width="20" height="25" viewBox="0 0 16 21" fill="white">
                                <path d="M2 21C1.45 21 .98 20.8.59 20.41.2 20.02 0 19.55 0 19V9C0 8.45.2 7.98.59 7.59.98 7.2 1.45 7 2 7H3V5C3 3.62 3.49 2.44 4.46 1.46 5.44.49 6.62 0 8 0s2.56.49 3.54 1.46C12.51 2.44 13 3.62 13 5V7H14C14.55 7 15.02 7.2 15.41 7.59 15.8 7.98 16 8.45 16 9V19C16 19.55 15.8 20.02 15.41 20.41 15.02 20.8 14.55 21 14 21H2ZM8 16C8.55 16 9.02 15.8 9.41 15.41 9.8 15.02 10 14.55 10 14s-.2-1.02-.59-1.41C9.02 12.2 8.55 12 8 12s-1.02.2-1.41.59C6.2 12.98 6 13.45 6 14s.2 1.02.59 1.41C6.98 15.8 7.45 16 8 16ZM5 7H11V5C11 4.17 10.71 3.46 10.13 2.88 9.54 2.29 8.83 2 8 2s-1.54.29-2.13.88C5.29 3.46 5 4.17 5 5V7Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Form Body */}
                    <div className="p-6 sm:p-10 pt-8 flex flex-col gap-8">
                        {/* Title */}
                        <div className="text-center mb-1">
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h2>
                            <p className="text-base text-slate-500">Enter your university credentials to continue</p>
                        </div>

                        {/* Form */}
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {/* Email */}
                            <div>
                                <label className="block text-base font-bold text-slate-700 mb-2 pl-1">University Email</label>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg width="20" height="20" viewBox="0 0 17 17" fill="currentColor">
                                            <path d="M8.33 16.67C7.18 16.67 6.1 16.45 5.08 16.01C4.07 15.57 3.19 14.98 2.44 14.23C1.69 13.48 1.09 12.6.66 11.58.22 10.57 0 9.49 0 8.33S.22 6.1.66 5.08C1.09 4.07 1.69 3.19 2.44 2.44 3.19 1.69 4.07 1.09 5.08.66 6.1.22 7.18 0 8.33 0s2.24.22 3.25.66C12.6 1.09 13.48 1.69 14.23 2.44c.75.75 1.35 1.63 1.78 2.64.44 1.02.66 2.1.66 3.25V9.54c0 .82-.28 1.52-.84 2.1-.56.57-1.25.86-2.07.86-.49 0-.94-.1-1.38-.31-.43-.21-.79-.51-1.08-.9-.41.4-.87.71-1.36.91-.49.2-1.02.3-1.58.3-1.15 0-2.14-.41-2.95-1.22S4.17 9.49 4.17 8.33 4.57 6.2 5.39 5.39 7.18 4.17 8.33 4.17s2.14.41 2.95 1.22 1.22 1.8 1.22 2.95v1.21c0 .36.12.67.35.92.24.25.54.37.9.37s.66-.12.9-.37c.24-.25.35-.56.35-.92V8.33c0-1.86-.65-3.44-1.94-4.73-1.29-1.29-2.87-1.93-4.73-1.93S4.9 2.31 3.6 3.6 1.67 6.47 1.67 8.33s.65 3.44 1.94 4.73c1.29 1.29 2.87 1.94 4.73 1.94H12.5v1.67H8.33ZM8.33 10.83c.69 0 1.29-.24 1.77-.73s.73-1.08.73-1.77-.24-1.29-.73-1.77-1.08-.73-1.77-.73-1.29.24-1.77.73-.73 1.08-.73 1.77.24 1.29.73 1.77 1.08.73 1.77.73Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="student@university.edu"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-14 pr-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-2 pl-1">
                                    <label className="text-base font-bold text-slate-700">Password</label>
                                    <a href="#" className="text-sm font-bold text-primary no-underline hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                        <svg width="17" height="20" viewBox="0 0 14 18" fill="currentColor">
                                            <path d="M1.67 17.5C1.21 17.5.82 17.34.49 17.01.16 16.68 0 16.29 0 15.83V7.5C0 7.04.16 6.65.49 6.32.82 6 1.21 5.83 1.67 5.83H2.5V4.17c0-1.16.41-2.14 1.22-2.95S5.51 0 6.67 0c1.15 0 2.14.41 2.95 1.22.81.81 1.22 1.79 1.22 2.95V5.83H11.67c.46 0 .85.17 1.17.49.33.33.49.72.49 1.18V15.83c0 .46-.16.85-.49 1.18-.32.33-.71.49-1.17.49H1.67ZM6.67 13.33c.46 0 .85-.16 1.17-.49.33-.32.49-.71.49-1.17s-.16-.85-.49-1.18c-.32-.33-.71-.49-1.17-.49s-.85.16-1.18.49c-.33.33-.49.72-.49 1.18s.16.85.49 1.17c.33.33.72.49 1.18.49ZM4.17 5.83H9.17V4.17c0-.69-.24-1.29-.73-1.77-.49-.49-1.08-.73-1.77-.73s-1.29.24-1.77.73c-.49.49-.73 1.08-.73 1.77V5.83Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-14 pr-14 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                    />
                                    <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer">
                                        <svg width="22" height="15" viewBox="0 0 18 13" fill="currentColor">
                                            <path d="M9.17 10c1.04 0 1.93-.36 2.66-1.09.72-.73 1.09-1.62 1.09-2.66S12.55 4.32 11.82 3.59C11.09 2.86 10.21 2.5 9.17 2.5S7.24 2.86 6.51 3.59C5.78 4.32 5.42 5.21 5.42 6.25s.36 1.93 1.09 2.66c.73.73 1.62 1.09 2.66 1.09Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="mt-3 w-full bg-primary text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors cursor-pointer text-base border-none"
                            >
                                Sign In
                                <svg width="16" height="16" viewBox="0 0 14 14" fill="white">
                                    <path d="M6.75 13.5V12H12V1.5H6.75V0H12C12.41 0 12.77.15 13.06.44c.29.3.44.65.44 1.06V12c0 .41-.15.77-.44 1.06-.29.29-.65.44-1.06.44H6.75ZM5.25 10.5L4.22 9.41L6.13 7.5H0V6H6.13L4.22 4.09L5.25 3L9 6.75L5.25 10.5Z" />
                                </svg>
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative mt-1">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-xs font-extrabold uppercase tracking-widest text-slate-500">New to the platform?</span>
                            </div>
                        </div>

                        {/* Bottom Actions Group */}
                        <div className="flex flex-col gap-3">
                            {/* Request Access Banner */}
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                                <span className="text-base text-slate-600">Looking to organize an event? </span>
                                <a href="#" className="text-base font-extrabold text-primary no-underline hover:underline inline-flex items-center gap-1">
                                    Request access
                                    <svg width="10" height="10" viewBox="0 0 8 8" fill="#2B8CEE">
                                        <path d="M6.09 4.5H0V3.5H6.09L3.29.7L4 0L8 4L4 8L3.29 7.3L6.09 4.5Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Admin Login Link */}
                            <div className="text-center">
                                <a href="#" className="text-sm font-medium text-slate-500 no-underline hover:text-primary transition-colors">
                                    Login as a admin →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
