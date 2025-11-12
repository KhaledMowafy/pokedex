
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold mb-2">404 – Not Found</h1>
      <p className="text-slate-600 mb-6">The page you are looking for doesn’t exist.</p>
      <Link to="/" className="text-indigo-700 hover:underline">Go Home</Link>
    </div>
  )
}
