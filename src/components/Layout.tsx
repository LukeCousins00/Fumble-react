import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="relative antialiased flex flex-row bg-slate-100">
      <main
        className={`transition-all transform duration-300 text-slate-700 flex w-full min-h-screen flex-col items-center`}
      >
        <Nav />

        <div className="w-full h-full p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
