import { useEffect, useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'

const BrandSlider = ({ brands, kind }) => {
  
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    window.onresize = checkMobile
    checkMobile()
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
          if (kind === slide.type) return <SwiperSlide key={`slide_${slide.id}`}>
            <img src={`${slide.img.url}`} alt={slide.title} width={240} height={100} />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default BrandSlider