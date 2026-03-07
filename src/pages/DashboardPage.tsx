import Header from '../components/shared/Header'
import EventCard from '../components/shared/EventCard'

const categories = ['Technical', 'Music', 'Cultural', 'Sports']

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-light-bg flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 sm:px-12 py-10">
                <div className="flex flex-col gap-12 w-full">
                    <div className="relative rounded-2xl overflow-hidden bg-primary min-h-[380px] sm:h-[380px] flex flex-col justify-center">
                        <img src="/image-003.png" alt="Events banner" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 sm:from-primary/90 via-primary/80 sm:via-primary/70 to-primary/40 sm:to-transparent" />
                        <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-center h-full max-w-lg">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug tracking-tight mb-3 sm:mb-4">
                                Discover and experience extraordinary Events
                            </h1>
                            <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed sm:leading-7 mb-8 sm:mb-10">
                                Enter in the world of events. Discover now the latest Events or start creating your own!
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
                    </div>

                    {/* Currently Happening */}
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-dark tracking-tight mb-4 sm:mb-6 px-1">
                            <span className="text-primary">Currently</span> Happening!
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <EventCard title="Project Da Vinci II" organizer="Tinkerhub" image="/image-007.png" />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" />
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
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" />
                            <EventCard title="Abstract Colors" organizer="By Esthera Jackson" image="/image-007.png" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
