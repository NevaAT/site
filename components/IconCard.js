import Image from 'next/image'

const IconCard = props => <div className="grid justify-center -mb-20 text-center">
  <div className="grid grid-rows-2">
    <div className="place-self-center">
      <Image src={props.src} alt={props.alt} width={160} height={160} />
    </div>
    <div className="-mt-4">
      <h4 className="text-base font-bold sm:text-xl text-bluegray-200">{props.title}</h4>
      <p className="h-20 text-xs font-medium sm:text-sm">{props.text}</p>
    </div>
  </div>
</div>

export default IconCard