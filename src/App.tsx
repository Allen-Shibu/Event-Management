import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import EventDetailsPage from './pages/EventDetailsPage'
import ExplorePage from './pages/ExplorePage'
import CampusCodePage from './pages/CampusCodePage'
import CreateEventPage from './pages/CreateEventPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/event/:id" element={<EventDetailsPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/campus-code" element={<CampusCodePage />} />
      <Route path="/create-event" element={<CreateEventPage />} />
    </Routes>
  )
}

export default App
