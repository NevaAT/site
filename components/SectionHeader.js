const SectionHeader = ({ menus, item }) => <h2 className="section-header">{menus && menus.find(menu => menu.Ref === item) && menus.find(menu => menu.Ref === item).InText || "-- empty header --"}</h2>

export default SectionHeader