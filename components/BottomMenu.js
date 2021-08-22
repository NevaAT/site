import MenuItem from './MenuItem'
const menuItems = require('../data/menuItems.json')

const BottomMenu = props => <ul className="flex flex-wrap justify-center max-w-4xl px-4 mx-auto space-x-6">
{
  menuItems.map(item => <li key={`bottom_menu_${item.ref}`}>
    <MenuItem href={item.ref} title={item.title} />
  </li>)
}
</ul>

export default BottomMenu