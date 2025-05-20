import Link from "next/link"
const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full h-20">
        <div className="flex justify-between items-center bg-cyan-700 px-4 py-3 rounded-md">
          <div className="text-white">
            <h1 className="text-xl font-bold">My Blog</h1>
          </div>
          <ul className="text-white flex space-x-1">
            <li>
              <Link 
                href="/"
                className="px-3 py-2 hover:bg-zinc-900 rounded transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="px-3 py-2 hover:bg-zinc-900 rounded transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/blog"
                className="px-3 py-2 hover:bg-zinc-900 rounded transition"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header