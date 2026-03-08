import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

const tags = ['Panel Discussion', "Women's Day", 'Inspiration', 'Career', 'Leadership']

export default function EventDetailsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative w-full bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0">
                    <img src="/image-001.png" alt="Event" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
                </div>

                <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12 lg:h-[600px] flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    {/* Back Button */}
                    <button className="absolute top-6 lg:top-8 left-6 sm:left-8 lg:left-12 bg-primary text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium hover:opacity-90 transition-opacity cursor-pointer border-none shadow-lg shadow-primary/25">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="white"><path d="M7.32.18c.24.24.24.64 0 .88L1.51 6.88 7.32 12.68c.24.25.24.65 0 .89-.25.24-.65.24-.89 0L.18 7.32c-.24-.24-.24-.64 0-.88L6.43.18C6.67-.06 7.07-.06 7.32.18Z" /></svg>
                        Back
                    </button>

                    {/* Title Overlay */}
                    <div className="max-w-xl lg:mb-16 mt-8 lg:mt-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4">Women's Day Panel Discussion</h1>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-normal mb-4 sm:mb-5">arch.ai</h2>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                            Hear from inspiring women leaders building impactful careers in tech and innovation.
                        </p>
                    </div>

                    {/* Date Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full md:w-[400px] lg:w-[385px] lg:absolute lg:top-[260px] lg:right-12 xl:right-12 shrink-0">
                        <h3 className="text-xl sm:text-2xl text-black font-semibold mb-3 sm:mb-4">Date &amp; time</h3>
                        <p className="text-base sm:text-lg text-gray-text mb-3">March 8, Sunday, 10 a.m. to 12 p.m.</p>
                        <a href="#" className="text-sm sm:text-base text-primary font-medium no-underline hover:underline block mb-5 sm:mb-6">Add to calendar</a>
                        <a href="https://forms.gle/3QMkovCen9WahB428" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center bg-primary text-white py-3.5 sm:py-4 rounded-full text-base font-semibold cursor-pointer border-none no-underline hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 lg:gap-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">Description</h2>
                            <p className="text-base text-gray-text leading-relaxed whitespace-pre-wrap">
                                If you stood by a beach and no one went in the water , would you? Maybe...or maybe not . But seeing someone else go in first changes everything.{"\n\n"}
                                Some things are like that . They might seem too hard to reach until someone shows us they can be done.{"\n\n"}
                                As a Women's day gift ,our amazing seniors are joining us to share their inspiring journeys.They once stood exactly where we are now , faced similar challenges, and made the most of the opportunities and choices they had.{"\n\n"}
                                No matter where you are in your journey, this session might be where everything falls into place.✨
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">Hours</h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-base text-gray-text">Sunday:</span>
                                    <span className="text-lg text-primary font-medium">10 a.m. - 12 p.m.</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-3">Organizer Contact</h2>
                            <p className="text-base text-gray-text">arch.ai Team</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 lg:gap-10">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-5">Event location</h2>
                            <div className="rounded-2xl overflow-hidden mb-5">
                                <img src="/image-002.png" alt="Event location map" className="w-full h-[280px] object-cover rounded-2xl" />
                            </div>
                            <h3 className="text-xl text-dark font-medium mb-2">Gloria Gopikumar Hall</h3>
                            <p className="text-base text-gray-text">Join us for the panel discussion at the Gloria Gopikumar Hall.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-4">Tags</h2>
                            <div className="flex flex-wrap gap-3">
                                {tags.map((tag, i) => (
                                    <span key={i} className="bg-light-bg px-5 py-2.5 rounded-full text-base text-dark font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-black mb-5">Share with friends</h2>
                            <div className="flex items-center gap-4">
                                {/* Facebook */}
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-t from-blue-600 to-blue-400 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                    <svg width="12" height="22" viewBox="0 0 12 22" fill="white"><path d="M11 0H8C5.24 0 3 2.24 3 5V8H0V12H3V22H7V12H10L11 8H7V5C7 4.45 7.45 4 8 4H11V0Z" /></svg>
                                </div>
                                {/* WhatsApp */}
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-t from-green-500 to-green-300 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.47 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.63.14-.19.28-.73.9-.89 1.09-.16.18-.33.2-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.63-1.52-.87-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" /><path d="M20.52 3.48C18.24 1.24 15.2 0 12 0 5.43 0 .11 5.32.11 11.88c0 2.09.55 4.14 1.59 5.94L0 24l6.33-1.66c1.74.95 3.7 1.45 5.69 1.45h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.18-1.24-6.16-3.48-8.42zM12.01 21.79c-1.77 0-3.51-.48-5.02-1.38l-.36-.21-3.73.98.99-3.63-.24-.37A9.83 9.83 0 012.12 11.88C2.12 6.43 6.56 2 12.01 2c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.44-4.44 9.88-9.88 9.88z" /></svg>
                                </div>
                                {/* LinkedIn */}
                                <div className="w-12 h-12 rounded-2xl bg-[#1265BF] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </div>
                                {/* Twitter */}
                                <div className="w-12 h-12 rounded-2xl bg-[#1EA1F2] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                    <svg width="18" height="15" viewBox="0 0 24 20" fill="white"><path d="M23.953 2.57a10.006 10.006 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 6.095 4.067 4.13 1.64 1.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 2.59l-.047-.02z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
