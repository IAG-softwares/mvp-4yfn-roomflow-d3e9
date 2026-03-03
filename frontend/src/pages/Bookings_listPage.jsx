import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'

export default function Bookings_listPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <p className="text-slate-400">Manage all room and building bookings</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Bookings Management</h1>
          <p className="text-slate-400">View and manage all room bookings</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-undefined mr-2"></i>New Booking</button>
        </div>
      </div>

      <StatsCard key="1" data={[]} />

      <DataTable key="2" columns={[]} rows={[]} />
    </div>
  )
}
