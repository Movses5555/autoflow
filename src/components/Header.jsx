
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "Problem",
    path: '/'
  },
  {
    name: "Solution",
    path: '/'
  },
  {
    name: "Features",
    path: '/'
  },
  {
    name: "Pricing",
    path: '/'
  }
]

export const Header = () => {
  return (
    <div className="fixed z-30 w-full top-0 left-0 h-56 px-9 header-bg">
      <div className="h-full flex items-center justify-between">
        <div className="">
          <img
            src={Logo}
            alt="header_logo"
          />
        </div>
        <div>
          <nav className='flex gap-40'>
            {
              Links.map((link, index) => {
                return (
                  <Link
                    key={index.toString()}
                    to={link.path}
                    className=''
                  >
                    <span className='text-xs font-semibold leading-8'>{link.name}</span>
                  </Link>
                )
              })
            }
          </nav>
        </div>
        <div>
          <button
            type="button" 
            className="uppercase text-black-200 bg-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
          >
            14 days free trial
          </button>
        </div>
      </div>
    </div>
  )
}
