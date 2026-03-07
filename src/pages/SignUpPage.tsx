import { Link } from 'react-router-dom'

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Left Panel - Campus Image */}
            <div className="hidden lg:flex w-1/2 relative bg-primary">
                <img
                    src="/image-013.png"
                    alt="University campus"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />

                {/* Left Panel Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-16 xl:p-24 text-white">
                    <div className="flex items-center gap-3 mb-8">
                        <svg width="33" height="27" viewBox="0 0 33 27" fill="white">
                            <path d="M16.5 27L6 21.3V12.3L0 9L16.5 0L33 9V21H30V10.65L27 12.3V21.3L16.5 27ZM16.5 14.55L26.775 9L16.5 3.45L6.225 9L16.5 14.55ZM16.5 23.5875L24 19.5375V13.875L16.5 18L9 13.875V19.5375L16.5 23.5875Z" />
                        </svg>
                        <h2 className="text-3xl font-bold">CampusEvents</h2>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6">
                        Your Gateway to<br />Campus Life.
                    </h1>
                    <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg">
                        Join thousands of students. Discover workshops,
                        hackathons, and social mixers happening right now
                        at your university.
                    </p>
                </div>
            </div>

            {/* Right Panel - Sign Up Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-10 bg-white min-h-screen">
                <div className="w-full max-w-[480px] mx-auto">
                    {/* Header */}
                    <div className="mb-8 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Create Student Account</h2>
                        <p className="text-base text-slate-500">Join your campus community today.</p>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg width="16" height="16" viewBox="0 0 14 14" fill="currentColor">
                                        <path d="M7 7C6.08 7 5.3 6.67 4.65 6.02C4 5.37 3.67 4.58 3.67 3.67C3.67 2.75 4 1.97 4.65 1.31C5.3 0.66 6.08 0.33 7 0.33C7.92 0.33 8.7 0.66 9.35 1.31C10 1.97 10.33 2.75 10.33 3.67C10.33 4.58 10 5.37 9.35 6.02C8.7 6.67 7.92 7 7 7ZM0.33 13.67V11.33C0.33 10.86 0.46 10.43 0.7 10.03C0.94 9.64 1.26 9.33 1.67 9.13C2.53 8.7 3.4 8.37 4.29 8.16C5.18 7.94 6.08 7.83 7 7.83C7.92 7.83 8.82 7.94 9.71 8.16C10.6 8.37 11.47 8.7 12.33 9.13C12.74 9.33 13.06 9.64 13.3 10.03C13.55 10.43 13.67 10.86 13.67 11.33V13.67H0.33Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                />
                            </div>
                        </div>

                        {/* University Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">University Email</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg width="18" height="15" viewBox="0 0 17 14" fill="currentColor">
                                        <path d="M1.67 13.33C1.21 13.33 0.82 13.17 0.49 12.84C0.16 12.52 0 12.13 0 11.67V1.67C0 1.21 0.16 0.82 0.49 0.49C0.82 0.16 1.21 0 1.67 0H15C15.46 0 15.85 0.16 16.18 0.49C16.5 0.82 16.67 1.21 16.67 1.67V11.67C16.67 12.13 16.5 12.52 16.18 12.84C15.85 13.17 15.46 13.33 15 13.33H1.67ZM8.33 7.5L1.67 3.33V11.67H15V3.33L8.33 7.5ZM8.33 5.83L15 1.67H1.67L8.33 5.83Z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="name@university.edu"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                />
                            </div>
                        </div>

                        {/* Student ID & Department row */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Student ID</label>
                                <input
                                    type="text"
                                    placeholder="ID-12345"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Department</label>
                                <div className="relative">
                                    <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5 pr-10 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                                        <option value="" disabled selected>Select Dept</option>
                                        <option>Computer Science</option>
                                        <option>Engineering</option>
                                        <option>Arts</option>
                                        <option>Business</option>
                                    </select>
                                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-3 text-slate-500 pointer-events-none" viewBox="0 0 10 5" fill="currentColor">
                                        <path d="M0 0L5 5L10 0H0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg width="15" height="19" viewBox="0 0 14 18" fill="currentColor">
                                        <path d="M1.67 17.5C1.21 17.5 0.82 17.34 0.49 17.01C0.16 16.68 0 16.29 0 15.83V7.5C0 7.04 0.16 6.65 0.49 6.32C0.82 6 1.21 5.83 1.67 5.83H2.5V4.17C2.5 3.01 2.91 2.03 3.72 1.22C4.53 0.41 5.51 0 6.67 0C7.82 0 8.8 0.41 9.61 1.22C10.43 2.03 10.83 3.01 10.83 4.17V5.83H11.67C12.13 5.83 12.52 6 12.84 6.32C13.17 6.65 13.33 7.04 13.33 7.5V15.83C13.33 16.29 13.17 16.68 12.84 17.01C12.52 17.34 12.13 17.5 11.67 17.5H1.67ZM6.67 13.33C7.13 13.33 7.52 13.17 7.84 12.84C8.17 12.52 8.33 12.13 8.33 11.67C8.33 11.21 8.17 10.82 7.84 10.49C7.52 10.16 7.13 10 6.67 10C6.21 10 5.82 10.16 5.49 10.49C5.16 10.82 5 11.21 5 11.67C5 12.13 5.16 12.52 5.49 12.84C5.82 13.17 6.21 13.33 6.67 13.33ZM4.17 5.83H9.17V4.17C9.17 3.47 8.92 2.88 8.44 2.4C7.95 1.91 7.36 1.67 6.67 1.67C5.97 1.67 5.38 1.91 4.9 2.4C4.41 2.88 4.17 3.47 4.17 4.17V5.83Z" />
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                />
                                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer">
                                    <svg width="20" height="15" viewBox="0 0 18 13" fill="currentColor">
                                        <path d="M9.17 10C10.21 10 11.09 9.64 11.82 8.91C12.55 8.18 12.92 7.29 12.92 6.25C12.92 5.21 12.55 4.32 11.82 3.59C11.09 2.86 10.21 2.5 9.17 2.5C8.13 2.5 7.24 2.86 6.51 3.59C5.78 4.32 5.42 5.21 5.42 6.25C5.42 7.29 5.78 8.18 6.51 8.91C7.24 9.64 8.13 10 9.17 10Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="mt-3 w-full bg-primary text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors cursor-pointer text-base border-none"
                        >
                            Create Account
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="white">
                                <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
                            </svg>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Or continue with</span>
                        </div>
                    </div>

                    {/* Google Sign Up */}
                    <button className="w-full border border-slate-200 rounded-full py-3.5 flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors bg-white cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 20 20">
                            <path d="M18.17 10.21C18.17 9.56 18.11 8.94 18 8.33H9.17V11.88H14.1C13.88 13.02 13.23 13.99 12.26 14.64V16.95H15.23C17.1 15.25 18.17 12.7 18.17 10.21Z" fill="#4285F4" />
                            <path d="M9.17 19.25C11.37 19.25 13.22 18.5 14.57 17.18L11.74 14.87C11 15.37 10.05 15.67 9.17 15.67C7 15.67 5.14 14.1 4.47 12.03H1.44V14.4C2.83 17.17 5.7 19.25 9.17 19.25Z" fill="#34A853" />
                            <path d="M4.47 12.03C4.3 11.53 4.2 11 4.2 10.45C4.2 9.9 4.3 9.37 4.47 8.87V6.5H1.44C0.87 7.63 0.54 8.89 0.54 10.21C0.54 11.53 0.87 12.79 1.44 13.92L4.47 12.03Z" fill="#FBBC05" />
                            <path d="M9.17 5.25C10.42 5.25 11.54 5.68 12.43 6.52L14.87 4.08C13.22 2.55 11.37 1.67 9.17 1.67C5.7 1.67 2.83 3.75 1.44 6.5L4.47 8.87C5.14 6.79 7 5.25 9.17 5.25Z" fill="#EA4335" />
                        </svg>
                        <span className="text-base font-medium text-slate-800">Sign up with Google</span>
                    </button>

                    {/* Login Link */}
                    <p className="text-center mt-6 text-base text-slate-600">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-primary no-underline hover:underline">
                            Log in
                        </Link>
                    </p>

                    {/* Footer Links */}
                    <div className="flex justify-center gap-8 mt-6">
                        <a href="#" className="text-sm text-slate-400 no-underline hover:text-slate-600">Terms of Service</a>
                        <a href="#" className="text-sm text-slate-400 no-underline hover:text-slate-600">Privacy Policy</a>
                        <a href="#" className="text-sm text-slate-400 no-underline hover:text-slate-600">Help Center</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
