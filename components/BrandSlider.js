import { useEffect, useState  } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'

const Brands = require('../data/brands.json')

const BrandSlider = props => {
  
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    window.onresize = checkMobile
    checkMobile()
  }, [isMobile])

  SwiperCore.use([Navigation, Autoplay])

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={isMobile? 2: 3}
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}
      navigation
    >
      {
        Brands.map((slide, i) => {
          if (props.kind === slide.kind) return <SwiperSlide key={`slide_${slide.brand}_${i}`}>
            <Image src={`/images/brands/brand-${slide.brand}.png`} alt={slide.brand} width={240} height={100} />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default BrandSlider