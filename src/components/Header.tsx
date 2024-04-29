import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to='/' className="text-3xl font-bold tracking-tighter text-orange-500">
          FoodieFront.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}
