import { marked } from 'marked'

const InnerText = ({menus, item}) => <div className="px-2 mb-12 text-center text-bluegray-300"
dangerouslySetInnerHTML={{
  __html: menus.find(menu => menu.Ref === item) && 
    marked.parse(menus.find(menu => menu.Ref === item).Text) || "-- empty --"
}}>
</div>

export default InnerText