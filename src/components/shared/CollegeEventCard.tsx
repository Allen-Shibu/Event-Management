interface CollegeEventCardProps {
    title: string
    date: string
    type: string
    image: string
}

export default function CollegeEventCard({ title, date, type, image }: CollegeEventCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-[250px] object-cover" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs text-primary font-semibold tracking-wide">FREE</span>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-2.5">
                <p className="text-base font-medium text-dark leading-snug">{title}</p>
                <p className="text-sm text-primary font-medium">{date}</p>
                <p className="text-xs text-gray-text">{type}</p>
            </div>
        </div>
    )
}
