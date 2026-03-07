import { useState, useEffect } from 'react'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import CollegeEventCard from '../components/shared/CollegeEventCard'

const filters = ['Weekdays', 'Event type', 'Any category']

const carouselItems = [
    { id: 1, image: '/image-010.png', name: 'Stanford University' },
    { id: 2, image: '/image-011.png', name: 'Massachusetts Institute of Technology (MIT)' },
    { id: 3, image: '/image-012.png', name: 'Harvard University' },
    { id: 4, image: '/image-010.png', name: 'University of California, Berkeley' },
    { id: 5, image: '/image-011.png', name: 'Princeton University' },
]

const events = Array(9).fill({
    title: 'BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow',
    date: 'Saturdat, March 18, 9.30PM',
    type: 'ONLINE EVENT - Attend anywhere',
})

export default function ExplorePage() {
    const [activeIndex, setActiveIndex] = useState(1)

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % carouselItems.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const handleNext = () => setActiveIndex((current) => (current + 1) % carouselItems.length)
    const handlePrev = () => setActiveIndex((current) => (current - 1 + carouselItems.length) % carouselItems.length)
    const handleDotClick = (index: number) => setActiveIndex(index)

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Title */}
            <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-8 lg:px-12 pt-8 sm:pt-14 pb-4 sm:pb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight">
                    Checkout other <span className="text-primary">college events</span> !!
                </h1>
            </div>

            {/* Image Carousel */}
            <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-8 lg:px-12 mb-12 sm:mb-20 relative">
                {/* Carousel Track */}
                <div className="relative h-[380px] sm:h-[480px] flex items-center justify-center w-full overflow-hidden">
                    {carouselItems.map((item, index) => {
                        let offset = index - activeIndex;

                        // Handle wrap-around for infinite scroll effect
                        if (offset < -2) offset += carouselItems.length;
                        if (offset > 2) offset -= carouselItems.length;

                        const isCenter = offset === 0;
                        const isLeft1 = offset === -1;
                        const isRight1 = offset === 1;
                        const isHidden = Math.abs(offset) > 1;

                        let transform = 'translateX(0) scale(0.5)';
                        let opacity = 0;
                        let zIndex = 0;

                        if (isCenter) {
                            transform = 'translateX(0) scale(1)';
                            opacity = 1;
                            zIndex = 30;
                        } else if (isLeft1) {
                            transform = 'translateX(-55%) scale(0.85)';
                            opacity = 0.6;
                            zIndex = 20;
                        } else if (isRight1) {
                            transform = 'translateX(55%) scale(0.85)';
                            opacity = 0.6;
                            zIndex = 20;
                        }

                        return (
                            <div
                                key={item.id}
                                className="absolute w-[80%] max-w-[800px] transition-all duration-700 ease-in-out flex flex-col items-center"
                                style={{
                                    transform,
                                    opacity,
                                    zIndex,
                                    pointerEvents: isHidden ? 'none' : 'auto'
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onClick={() => {
                                        if (isLeft1) handlePrev();
                                        if (isRight1) handleNext();
                                    }}
                                    className={`w-full h-[240px] sm:h-[320px] object-cover rounded-3xl sm:rounded-[2rem] shadow-xl transition-all duration-700 ${!isCenter ? 'cursor-pointer hover:opacity-100' : ''}`}
                                />
                                <div className={`mt-4 sm:mt-6 text-center transition-all duration-700 ${isCenter ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'}`}>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{item.name}</h3>
                                    <p className="text-sm sm:text-base text-primary font-medium mt-1">Explore campus events</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mt-4 relative z-40">
                    <button onClick={handlePrev} className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>

                    <div className="flex items-center gap-2.5">
                        {carouselItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2.5 rounded-full transition-all duration-500 border-none cursor-pointer ${index === activeIndex ? 'w-10 bg-primary shadow-md shadow-primary/30' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button onClick={handleNext} className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-md">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            {/* Colleges Near You */}
            <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-8 lg:px-12 pb-12 lg:pb-16">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-10 mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-normal text-black">
                        <span className="text-primary font-semibold">Colleges</span> near you
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 -mb-2 sm:mb-0 no-scrollbar">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className="shrink-0 flex items-center gap-2 bg-gray-100/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-dark cursor-pointer border-none hover:bg-gray-200 transition-colors"
                            >
                                {filter}
                                <svg width="12" height="6" viewBox="0 0 12 6" fill="currentColor">
                                    <path d="M.71-.71a1 1 0 00-1.42 1.42L.71-.71ZM6 6l-.71.71a1 1 0 001.42 0L6 6ZM12.71.71A1 1 0 0011.29-.71L12.71.71ZM-.71.71L5.29 6.71 6.71 5.29.71-.71-.71.71ZM6.71 6.71L12.71.71 11.29-.71 5.29 5.29 6.71 6.71Z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Event Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {events.map((event, i) => (
                        <CollegeEventCard
                            key={i}
                            title={event.title}
                            date={event.date}
                            type={event.type}
                            image={i % 3 === 0 ? '/image-008.png' : i % 3 === 1 ? '/image-009.png' : '/image-001.png'}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}
