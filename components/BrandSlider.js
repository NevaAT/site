import { useEffect, useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import { API_URL } from '@/config/index'

// const Brands = require('../data/brands.json')

const BrandSlider = props => {
  
  const [ isMobile, setIsMobile ] = useState(false)
  const [ brands, setBrands ] = useState(null)

  const getBrands = async () => {
    const res = await fetch(`${API_URL}/brands`)
    setBrands(await res.json())
  }

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    window.onresize = checkMobile
    checkMobile()
    getBrands()
  }, [isMobile])

  SwiperCore.use([Navigation, Autoplay])

  return ( brands &&
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
        brands.map(slide => {
          if (props.kind === slide.type) return <SwiperSlide key={`slide_${slide.id}`}>
            <img src={`${slide.img.url}`} alt={slide.title} width={240} height={100} />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default BrandSlider