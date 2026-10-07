import { Link, useLocation } from 'react-router-dom'
import { dummyUser } from "../assets/asset"

const Navbar = () => {
  const { isSignedIn, user } = { user: dummyUser, isSignedIn: true }
  const location = useLocation()
  const userName =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
    "User"

  return (
    <header className="w-full max-w-300 mx-auto bg-white/90 backdrop-blur xl:rounded-b-xl sticky top-0 z-40 px-6 py-4 flex items-center justify-between border border-slate-200">
      {/* Brand logo */}
      <Link to="/dashboard" className="flex items-center gap-1.5">
        <img src="/logo.svg" alt="MeetUp Logo" className="size-6.5" />
        <span className="text-2xl font-medium tracking-tight text-slate-900">
          MeetUp<span className="text-primary">.</span>
        </span>
      </Link>

      {/* Right side: nav links / UserButton */}
    </header>
  )
}

export default Navbar