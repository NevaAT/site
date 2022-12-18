import BottomMenu from "@/components/BottomMenu"
import BottomContacts from "@/components/BottomContacts"

const Footer = ({ menus, phones, imgURL, settings }) => {
  return (
    <footer className="pb-12">
      <div className="pb-6 mt-16 text-xs text-center text-bluegray-400">© {(new Date().getFullYear())} Нева-Автоматизация</div>
      <BottomMenu menus={menus} />
      <BottomContacts phones={phones} imgURL={imgURL} settings={settings} />
    </footer>
  )
}

export default Footer