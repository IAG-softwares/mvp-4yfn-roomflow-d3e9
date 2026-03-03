import StatsCard from '../components/StatsCard'

export default function Buildings_listPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Buildings</h1>
        <p className="text-slate-400">Manage buildings and spaces available for booking</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Buildings Management</h1>
          <p className="text-slate-400">Manage available buildings and their details</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-undefined mr-2"></i>Add Building</button>
        </div>
      </div>

      <StatsCard key="1" data={[]} />

      <div key="2" className="card">
        <h3 className="text-lg font-semibold mb-4">Available Buildings</h3>
        <div className="space-y-3">
          
        </div>
      </div>
    </div>
  )
}
