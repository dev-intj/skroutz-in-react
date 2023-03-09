import { NavBar } from "./navbar";
import { Footer } from "./footer";

export function Layout({ children }) {
  return (
    <div className="h-screen w-screen min-h-screen min-w-screen page">
      <div className="flex flex-col gap-2 h-full">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
