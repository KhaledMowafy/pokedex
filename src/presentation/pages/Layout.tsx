import Header from "../components/organisms/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const bgClass = pathname.startsWith("/pagination")
    ? "bg-[#E5EAFE]"
    : pathname.startsWith("/load-more")
    ? "bg-[#DEFAEB]"
    : pathname.startsWith("/pokemon/")
    ? "bg-[#FCF0FE]"
    : "bg-white";
  return (
    <div className={`min-h-screen ${bgClass}`}>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
