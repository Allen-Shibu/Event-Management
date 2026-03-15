import { useState, useEffect, useCallback } from 'react'
import Header from '../components/shared/Header'
import EventCard from '../components/shared/EventCard'

const categories = ['Technical', 'Music', 'Cultural', 'Sports']

const bannerSlides = [
    {
        type: 'hero' as const,
        image: '/image-003.png',
        title: 'Discover and experience extraordinary Events',
        description: 'Enter in the world of events. Discover now the latest Events or start creating your own!',
    },
    {
        type: 'event' as const,
        image: '/image-001.png',
        title: "Women's Day Panel Discussion",
        deadline: 'Register by March 8, 2026',
    },
    {
        type: 'event' as const,
        image: '/image-008.png',
        title: 'Cultural Fest: Colors of Spring',
        deadline: 'Register by March 30, 2026',
    },
]

export default function DashboardPage() {
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = useCallback(() => {
        setActiveSlide((prev) => (prev + 1) % bannerSlides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setActiveSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
    }, [])

    // Auto-advance every 6 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <div className="min-h-screen bg-light-bg flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 sm:px-12 py-10">
                <div className="flex flex-col gap-12 w-full">

                    {/* ===== Banner Carousel ===== */}
                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-[320px] sm:h-[400px] group">
                        {/* Slides */}
                        {bannerSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                                {/* Hero slide gets blue gradient, event slides get subtle dark bottom gradient */}
                                {slide.type === 'hero' ? (
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 sm:from-primary/90 via-primary/80 sm:via-primary/70 to-primary/40 sm:to-transparent" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                )}
                            </div>
                        ))}

                        {/* Content Overlay — changes based on slide type */}
                        {bannerSlides[activeSlide].type === 'hero' ? (
                            /* Hero Banner Content */
                            <div className="relative z-20 p-8 sm:p-12 flex flex-col justify-center h-full max-w-lg">
                                <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug tracking-tight mb-3 sm:mb-4">
                                    {bannerSlides[activeSlide].title}
                                </h1>
                                <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed sm:leading-7 mb-8 sm:mb-10">
                                    {bannerSlides[activeSlide].description}
                                </p>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                                    <button className="w-full sm:w-auto bg-white text-dark text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer border-none shadow-lg shadow-black/10">
                                        Create an Event
                                    </button>
                                    <button className="w-full sm:w-auto text-white text-sm sm:text-base font-medium bg-transparent border-2 border-white/40 px-8 py-3 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                                        Join Event
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Event Slide Content */
                            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 z-20 max-w-lg">
                                <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug tracking-tight mb-2 sm:mb-3 drop-shadow-lg">
                                    {bannerSlides[activeSlide].title}
                                </h2>
                                <p className="text-sm sm:text-base text-white/80 font-medium flex items-center gap-2">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="shrink-0 opacity-70" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                    {'deadline' in bannerSlides[activeSlide] ? bannerSlides[activeSlide].deadline : ''}
                                </p>
                            </div>
                        )}

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all cursor-pointer border-none opacity-0 group-hover:opacity-100"
                            aria-label="Previous slide"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all cursor-pointer border-none opacity-0 group-hover:opacity-100"
                            aria-label="Next slide"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-5 right-6 sm:right-10 z-30 flex items-center gap-2">
                            {bannerSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`rounded-full border-none cursor-pointer transition-all duration-400 ${index === activeSlide
                                        ? 'w-8 h-2.5 bg-white shadow-md'
                                        : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Currently Happening */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-dark tracking-tight mb-4 sm:mb-6 px-1">
                            <span className="text-primary">Currently</span> Happening!
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <EventCard title="Project Da Vinci II" organizer="Tinkerhub" image="/image-007.png" accentRegister />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" accentRegister />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" accentRegister />
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div>
                        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 xl:gap-0 mb-6 px-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-dark tracking-tight">
                                <span className="text-primary">Upcoming</span>  Events!
                            </h2>
                            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 -mb-2 no-scrollbar w-full xl:w-auto">
                                {categories.map((cat, i) => (
                                    <button
                                        key={cat}
                                        className={`shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors border-none ${i === 0
                                            ? 'bg-primary-light text-primary'
                                            : 'bg-transparent text-gray-text hover:bg-primary-light hover:text-primary'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" accentRegister />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" accentRegister />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" accentRegister />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
