import StatsCard from '../components/StatsCard'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview of all bookings and building statistics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">RoomFlow Dashboard</h1>
          <p className="text-slate-400">Manage your space bookings efficiently</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>

      <div key="3" className="card">
        <p className="text-slate-400">Component: cta</p>
      </div>
    </div>
  )
}
