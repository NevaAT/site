import { useEffect, useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import Image from 'next/image'

const BrandSlider = ({ brands, kind, imgURL }) => {
  // console.log('name in brandslider', brands);
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
          if (slide.type?.indexOf(kind) > -1) return <SwiperSlide key={`slide_${slide._id}`}>
            <Image src={`${imgURL}${slide.img.path}`} alt={slide.title} width={240} height={100} />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default BrandSlider