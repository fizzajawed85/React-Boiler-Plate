import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">BoilerPlate</h1>
      <div className="space-x-6">
        <Link to="/" className={pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Dashboard
        </Link>
        <Link to="/login" className={pathname === "/login" ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Login
        </Link>
        <Link to="/signup" className={pathname === "/signup" ? "text-blue-600 font-semibold" : "text-gray-700"}>
          Signup
        </Link>
      </div>
    </nav>
  );
}
