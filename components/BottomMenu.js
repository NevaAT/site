import MenuItem from '@/components/MenuItem'

const BottomMenu = ({ menus }) => <ul className="flex flex-wrap justify-center max-w-4xl mx-auto">
{
  menus.map(item => <li key={`menu_${item.title}`}><MenuItem href={item.url} title={item.title} /></li>)
}
</ul>

export default BottomMenu