import { Bars3Icon } from '@heroicons/react/24/outline'
import MenuItem from '@/components/MenuItem'

const TopMenu = ({ menus }) => {

  return (

<div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <Bars3Icon className="w-7 h-7" />
      </label>
      <ul tabIndex={0} className="p-2 mt-3 rounded-lg shadow menu menu-compact dropdown-content bg-base-100 w-52">
      {
        menus.map(item => <li key={`menu_${item.title}`}><MenuItem href={item.url} title={item.title} /></li>)
      }
      </ul>
    </div>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
    {
      menus.map(item => <li key={`menuMobile_${item.title}`}><MenuItem href={item.url} title={item.title} /></li>)
    }
    </ul>
  </div>
  <div className="navbar-end" />
</div>
  )
}

export default TopMenu