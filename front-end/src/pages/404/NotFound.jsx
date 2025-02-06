
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate =useNavigate();
  return <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
  <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-6xl font-bold text-green-500">404</h1>
    <h2 className="mt-4 text-2xl font-semibold text-gray-800">Oops! Page not found.</h2>
    <p className="mt-2 text-gray-600">
      The page you’re looking for doesn’t exist or has been moved.
    </p>
    <button className="border bg-green-100 rounded p-1" onClick={()=>navigate(-1)}>go back</button>
    
  </div>
</div>;
}
