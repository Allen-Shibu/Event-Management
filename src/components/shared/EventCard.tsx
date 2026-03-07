import { Link } from 'react-router-dom'

interface EventCardProps {
    title: string
    organizer: string
    image: string
}

export default function EventCard({ title, organizer, image }: EventCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex-1 min-w-[300px]">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-[220px] object-cover" />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm border-none cursor-pointer">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M13.277 0.7754C11.293-0.633 8.842 0.024 7.519 1.636C6.197 0.024 3.746-0.641 1.762 0.775C0.71 1.527 0.048 2.795 0.003 4.133C-0.102 7.17 2.483 9.604 6.43 13.338L6.505 13.408C7.076 13.949 7.955 13.949 8.527 13.401L8.609 13.322C12.555 9.597 15.134 7.162 15.036 4.125C14.991 2.795 14.329 1.527 13.277 0.775Z" fill="#2B8CEE" />
                    </svg>
                </button>
            </div>
            <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-dark mb-1">{title}</h3>
                        <p className="text-sm text-gray-text">{organizer}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="flex -space-x-2">
                            <div className="w-7 h-7 rounded-full bg-primary border-2 border-white" />
                            <div className="w-7 h-7 rounded-full bg-primary/70 border-2 border-white" />
                            <div className="w-7 h-7 rounded-full bg-primary/40 border-2 border-white" />
                        </div>
                        <span className="text-xs font-bold text-primary ml-1">18+</span>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <Link to="/event/1" className="text-sm font-bold text-primary no-underline hover:underline">
                        More Details
                    </Link>
                    <Link
                        to="/event/1"
                        className="bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full no-underline hover:bg-orange-600 transition-colors"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}
