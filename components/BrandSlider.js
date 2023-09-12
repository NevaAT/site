import { useEffect, useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'

const BrandSlider = ({ brands, kind, imgURL }) => {
  // console.log('name in brandslider', brands);
  const [ isMobile, setIsMobile ] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    window.onresize = checkMobile
    checkMobile()
  }, [isMobile])

  SwiperCore.use([Navigation, Autoplay])

  return ( brands && <>
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
        brands.map((slide, no) => {
          // if (slide.type?.indexOf(kind) > -1) 
          //   console.log(`kind ${kind} No.${no+1}, title: ${slide?.title}`);
          if (slide.type?.indexOf(kind) > -1) return (
            <SwiperSlide key={`slide_${slide._id}`}>
            {
              slide?.link
              ? <Link href={slide?.link?.trim()} className="cursor-pointer" target="_blank">
                  <Image src={`${imgURL}${slide.img.path}`} alt={slide.title} width={240} height={100} />
                </Link>
              : <Image src={`${imgURL}${slide.img.path}`} alt={slide.title} width={240} height={100} />
            }
            </SwiperSlide>
          )
        })
      }
    </Swiper>

    {/* <div className="container grid grid-cols-2 gap-4 p-4 mx-auto mt-12">
      {
        brands?.map(slide => {
          if (slide?.type?.indexOf(kind) > -1) return <div className="pt-2 border bg-white/90 card" key={slide?.id}>
          <figure><img src={imgURL+slide.img.path} alt={slide.title} /></figure>
          <div className="card-body">
            <h2 className="justify-center uppercase card-title">{slide.title}</h2>
          </div>
        </div>
        })
      }
    </div> */}


  </>
  )
}

export default BrandSlider