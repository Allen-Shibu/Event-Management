import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/shared/Header'

const categories = [
    { label: 'Workshop', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg> },
    { label: 'Seminar', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg> },
    { label: 'Party', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10M22 13l-2.24-.75a2.9 2.9 0 0 0-1.96-3.12v0c-.1-.86.57-1.63 1.45-1.63h.38c.86 0 1.6-.6 1.76-1.44L22 4" /></svg> },
    { label: 'Sports', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg> },
]

const stepsData = [
    { number: 1, label: 'INFO' },
    { number: 2, label: 'LOCATION' },
    { number: 3, label: 'TICKETS' },
    { number: 4, label: 'PROMOTION' },
]

export default function CreateEventPage() {
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const [isPublished, setIsPublished] = useState(false)

    // Form states
    const [activeCategory, setActiveCategory] = useState('Workshop')
    const [locationType, setLocationType] = useState<'Offline' | 'Online'>('Offline')
    const [ticketType, setTicketType] = useState<'Free' | 'Paid'>('Free')
    const [visibility, setVisibility] = useState<'Public' | 'Private'>('Public')
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventStartDateTime, setEventStartDateTime] = useState("");
    const [eventEndDateTime, setEventEndDateTime] = useState("");
    const [imageURL, setImageURL] = useState("");


    const handleImageUpload =async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'openorbit_events')

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dlpkch3n4/image/upload",
          formData,
        );
        setImageURL(res.data.secure_url)
        console.log('Uploaded!', res.data.secure_url)
    }

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handlePublish = () => {
        axios
          .post("http://localhost:5000/events", {
            title: title,
            description: description,
            eventStartDateTime: new Date(eventStartDateTime).toISOString(),
            eventEndDateTime: new Date(eventEndDateTime).toISOString(),
            imageURL:imageURL
          })
          .then(() => {
            setIsPublished(true);
          })
          .catch((err) => {
            console.error(err);
          });
    }

    if (isPublished) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 max-w-[500px] w-full text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-3">Event Published!</h1>
                        <p className="text-slate-500 mb-8">
                            Your event is now live. Let's get the word out and start gathering attendees!
                        </p>
                        <div className="w-full flex flex-col gap-3">
                            <button
                                onClick={() => navigate('/event-details')}
                                className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity cursor-pointer border-none text-base"
                            >
                                View Event Page
                            </button>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="w-full bg-slate-100 text-slate-700 font-bold py-4 rounded-full hover:bg-slate-200 transition-colors cursor-pointer border-none text-base"
                            >
                                Return to Dashboard
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <Header />

        {/* Main Content */}
        <main className="max-w-[700px] mx-auto w-full px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-5">
            <Link
              to="/dashboard"
              className="text-primary no-underline hover:underline"
            >
              Dashboard
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-slate-700 font-medium">Create New Event</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Create New Event
            </h1>
            <p className="text-base text-gray-500">
              Bring your campus community together with a great activity.
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-primary">
                Step {currentStep}: {stepsData[currentStep - 1].label}
              </span>
              <span className="text-sm text-gray-500">
                {currentStep * 25}% Complete
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${currentStep * 25}%` }}
              />
            </div>
            {/* Steps */}
            <div className="flex items-center justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-10" />

              {stepsData.map((step) => {
                const isActive = currentStep === step.number;
                const isPast = currentStep > step.number;
                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center gap-2.5 bg-white px-2"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : isPast
                            ? "bg-primary/20 text-primary"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isPast ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold tracking-wider ${isActive ? "text-primary" : isPast ? "text-slate-700" : "text-gray-400"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* ----------------- STEP 1: INFO ----------------- */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {/* Event Details Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="#2B8CEE"
                      >
                        <circle cx="10" cy="10" r="4" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Event Details
                    </h2>
                  </div>

                  {/* Event Title */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                      Event Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Annual Tech Symposium 2024"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Category
                    </label>
                    <div className="flex flex-wrap items-center gap-3">
                      {categories.map((cat) => (
                        <button
                          key={cat.label}
                          type="button"
                          onClick={() => setActiveCategory(cat.label)}
                          className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium cursor-pointer transition-all border ${
                            activeCategory === cat.label
                              ? "bg-primary text-white border-primary shadow-md shadow-primary/20 [&>svg]:text-white"
                              : "bg-white text-slate-600 border-gray-200 hover:border-primary/50 hover:text-primary [&>div>svg]:text-slate-400 [&>div>svg]:hover:text-primary"
                          }`}
                        >
                          <div
                            className={`flex items-center justify-center ${activeCategory === cat.label ? "text-white" : "text-slate-400"}`}
                          >
                            {cat.icon}
                          </div>
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                      Description
                    </label>
                    <textarea
                      placeholder="Tell students what this event is about..."
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-y"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      Maximum 2000 characters
                    </p>
                  </div>
                </div>

                {/* Event Banner Card */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 20"
                        fill="#2B8CEE"
                      >
                        <rect x="2" y="2" width="16" height="16" rx="2" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Event Banner
                    </h2>
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-2xl py-14 px-8 flex flex-col items-center gap-4 hover:border-primary/40 transition-colors cursor-pointer bg-gray-50/50">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="#2B8CEE"
                      >
                        <path d="M19 7V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H2v2h2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9h2V7h-3zM7 5h10v2H7V5zm10 14H7v-8l3.5 4.5L14 12l3 3.5V19z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 text-center">
                      PNG, JPG or WEBP (Recommended 1600x900px, max 5MB)
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      id="imageUpload"
                      className="hidden mt-2 bg-white border border-gray-300 rounded-xl px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
                    />
                    {/* Button triggers the hidden input */}
                    <label
                      htmlFor="imageUpload"
                      className="mt-2 bg-white border border-gray-300 rounded-xl px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
                    >
                      Select File
                    </label>
                    {imageURL && (
                      <img
                        src={imageURL}
                        alt="Preview"
                        className="mt-4 w-full rounded-xl object-cover h-40"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- STEP 2: LOCATION & TIME ----------------- */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                {/* Location */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">
                    Where is it taking place?
                  </h2>

                  {/* Toggle */}
                  <div className="flex p-1 bg-gray-100 rounded-xl mb-6 font-medium text-sm">
                    <button
                      type="button"
                      onClick={() => setLocationType("Offline")}
                      className={`flex-1 py-2.5 rounded-lg transition-all cursor-pointer border-none ${locationType === "Offline" ? "bg-white text-primary shadow-sm" : "bg-transparent text-slate-500 hover:text-slate-700"}`}
                    >
                      Offline Venue
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocationType("Online")}
                      className={`flex-1 py-2.5 rounded-lg transition-all cursor-pointer border-none ${locationType === "Online" ? "bg-white text-primary shadow-sm" : "bg-transparent text-slate-500 hover:text-slate-700"}`}
                    >
                      Online Meeting
                    </button>
                  </div>

                  {locationType === "Offline" ? (
                    <>
                      <div className="mb-5">
                        <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                          Venue Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Main Auditorium"
                          className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                          Full Address
                        </label>
                        <textarea
                          placeholder="Building, Room number, Street..."
                          rows={2}
                          className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Meeting Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://zoom.us/j/..."
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Provide a Zoom, Google Meet, or Teams link.
                      </p>
                    </div>
                  )}
                </div>

                {/* Date & Time */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">
                    When is it happening?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Start Date
                      </label>
                      <input
                        type="datetime-local"
                        value={eventStartDateTime}
                        onChange={(e) => setEventStartDateTime(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Start Time
                      </label>
                      <input
                        type="time"
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        End Date
                      </label>
                      <input
                        type="datetime-local"
                        value={eventEndDateTime}
                        onChange={(e) => setEventEndDateTime(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        End Time
                      </label>
                      <input
                        type="time"
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- STEP 3: TICKETS ----------------- */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">
                    Ticketing Options
                  </h2>

                  {/* Toggle */}
                  <div className="flex p-1 bg-gray-100 rounded-xl mb-8 font-medium text-sm">
                    <button
                      type="button"
                      onClick={() => setTicketType("Free")}
                      className={`flex-1 py-2.5 rounded-lg transition-all cursor-pointer border-none ${ticketType === "Free" ? "bg-white text-primary shadow-sm" : "bg-transparent text-slate-500 hover:text-slate-700"}`}
                    >
                      Free
                    </button>
                    <button
                      type="button"
                      onClick={() => setTicketType("Paid")}
                      className={`flex-1 py-2.5 rounded-lg transition-all cursor-pointer border-none ${ticketType === "Paid" ? "bg-white text-primary shadow-sm" : "bg-transparent text-slate-500 hover:text-slate-700"}`}
                    >
                      Paid
                    </button>
                  </div>

                  {ticketType === "Paid" && (
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Ticket Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                          $
                        </span>
                        <input
                          type="number"
                          placeholder="25.00"
                          className="w-full border border-gray-200 rounded-xl py-3.5 pl-9 pr-5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Capacity Limit
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 150"
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Leave empty for unlimited
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Registration Deadline
                      </label>
                      <input
                        type="datetime-local"
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- STEP 4: PROMOTION ----------------- */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900 mb-6">
                    Visibility
                  </h2>

                  <div className="space-y-4 mb-8">
                    {/* Public Card */}
                    <label
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${visibility === "Public" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40"}`}
                    >
                      <div className="mt-0.5">
                        <input
                          type="radio"
                          name="visibility"
                          checked={visibility === "Public"}
                          onChange={() => setVisibility("Public")}
                          className="w-4 h-4 text-primary"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">
                          Public
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Anyone can see and register for this event. It will be
                          listed on the Explore page.
                        </p>
                      </div>
                    </label>

                    {/* Private Card */}
                    <label
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${visibility === "Private" ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary/40"}`}
                    >
                      <div className="mt-0.5">
                        <input
                          type="radio"
                          name="visibility"
                          checked={visibility === "Private"}
                          onChange={() => setVisibility("Private")}
                          className="w-4 h-4 text-primary"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">
                          Private (Invite Only)
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          Unlisted. Only people with the direct link can view
                          and register.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="border-t border-gray-100 pt-8 mb-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6">
                      Tags & Contact Details
                    </h2>
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                        Tags
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Technology, Networking, AI (Comma separated)"
                        className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          placeholder="organizer@university.edu"
                          className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="https://"
                          className="w-full border border-gray-200 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ----------------- ACTION BUTTONS ----------------- */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-8 sm:mt-10 pb-10 sm:pb-16 w-full">
              <button
                type="button"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white border border-gray-200 rounded-xl px-7 py-3.5 text-sm font-semibold text-slate-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                </svg>
                Save as Draft
              </button>

              <div className="flex gap-4 w-full sm:w-auto">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 sm:flex-none px-6 py-3.5 rounded-full text-sm font-bold text-slate-600 bg-gray-200 hover:bg-gray-300 transition-colors cursor-pointer border-none"
                  >
                    Back
                  </button>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-primary text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-primary-dark transition-colors cursor-pointer border-none shadow-lg shadow-primary/25"
                  >
                    Next Step
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="white"
                    >
                      <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handlePublish}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-green-500 text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-green-600 transition-colors cursor-pointer border-none shadow-lg shadow-green-500/25"
                  >
                    Publish Event
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </form>
        </main>
      </div>
    );
}
