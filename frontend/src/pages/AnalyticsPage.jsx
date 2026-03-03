import StatsCard from '../components/StatsCard'
import ChartComponent from '../components/ChartComponent'

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-slate-400">Analytics and insights for space utilization and booking trends</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics & Reports</h1>
          <p className="text-slate-400">Insights into space utilization and booking patterns</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[]} />

      <ChartComponent key="2" type="bar" title="Booking Trends" data={{"labels":["Jan","Feb","Mar","Apr","May","Jun"],"datasets":[{"label":"Monthly Bookings","data":[25,32,28,35,40,42]}]}} />

      <ChartComponent key="3" type="bar" title="Building Utilization" data={{"labels":["Building A","Building B","Building C","Building D"],"datasets":[{"label":"Utilization Rate (%)","data":[85,72,68,91]}]}} />
    </div>
  )
}
