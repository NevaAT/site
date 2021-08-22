import Image from 'next/image'

const IconCard = props => <div className="grid justify-center text-center -mb-20">
  <div className="grid grid-rows-2">
    <div className="place-self-center">
      <Image src={props.src} alt={props.alt} width={160} height={160} />
    </div>
    <div className="-mt-4">
      <h4 className="text-base sm:text-xl font-bold text-bluegray-200">{props.title}</h4>
      <p className="text-xs sm:text-sm font-medium h-20">{props.text}</p>
    </div>
  </div>
</div>

export default IconCard