import MenuItem from './MenuItem'
// const menuItems = require('../data/menuItems.json')

const BottomMenu = ({menus}) => <ul className="flex flex-wrap justify-center max-w-4xl px-4 mx-auto space-x-6">
{
  menus.map(item => <li key={`bottom_menu_${item.id}`}>
    <MenuItem href={item.Ref} title={item.Title} />
  </li>)
}
</ul>

export default BottomMenu