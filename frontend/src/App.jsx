import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import Bookings_listPage from './pages/Bookings_listPage'
import Buildings_listPage from './pages/Buildings_listPage'
import AnalyticsPage from './pages/AnalyticsPage'

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bookings" element={<Bookings_listPage />} />
          <Route path="/buildings" element={<Buildings_listPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
