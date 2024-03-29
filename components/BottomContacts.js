import Image from 'next/image'
import Svg from '@/components/Svg'

const BottomContacts = ({ phones, imgURL, settings }) => {
  // console.log(settings);
  return (
    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto mt-16 space-x-6">
      <div className="h-16 pt-1 my-8">
        <Image src={imgURL+settings?.images?.small?.path} width="96" height="96" alt="logo bottom" />
      </div>
      {/* <div>
        <a href="https://www.facebook.com/nevaautomatization/" target="_blank">
          <Svg name="fb" width="48" height="48" className="text-bluegray-200" />
        </a>
      </div> */}
      <div>
        <a href="https://vk.com/nevaavtomatizaciya" target="_blank">
          <Svg name="vk" width="48" height="48" className="text-bluegray-200" />
        </a>
      </div>
      <div className="flex justify-center py-4">
        <Svg name="phone" width="48" height="48" className="text-bluegray-200" />
        <div className="grid ml-4 place-self-center">
          <div className="grid justify-end grid-rows-2 text-sm text-bluegray-300">
            <a href={phones[0] && phones[0].link}>{phones[0] && phones[0].shown}</a>
            <a href={phones[1] && phones[1].link}>{phones[1] && phones[1].shown}</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Svg name="mail" width="62" height="48" className="text-bluegray-200" />
        <div className="grid ml-4 place-self-center text-bluegray-300">info@nevaat.ru</div>
      </div>
    </div>
  )
}

export default BottomContacts