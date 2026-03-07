import Header from '../components/shared/Header'

export default function CampusCodePage() {
    return (
        <div className="min-h-screen bg-light-bg flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 py-10">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 lg:p-16 flex flex-col items-center max-w-lg w-full">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#2B8CEE">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-3 text-center">Enter Campus Code</h1>
                    <p className="text-sm sm:text-base text-gray-text mb-8 sm:mb-10 text-center max-w-sm">
                        Enter the 4-digit code to verify your campus identity
                    </p>

                    {/* Code Input Boxes */}
                    <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-10 w-full justify-center">
                        {[0, 1, 2, 3].map((i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-14 h-16 sm:w-16 sm:h-20 bg-slate-50 border-2 border-slate-200 rounded-2xl text-center text-2xl sm:text-3xl font-bold text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                            />
                        ))}
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer border-none text-base mb-6">
                        Verify Code
                    </button>

                    <p className="text-xs sm:text-sm text-gray-text text-center max-w-xs">
                        Check your class WhatsApp group or notice board for the code
                    </p>
                </div>
            </main>
        </div>
    )
}
