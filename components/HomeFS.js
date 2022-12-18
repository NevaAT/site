import Image from "next/image"

const HomeFS = ({ data, imgURL }) => {
  const src = `${imgURL}${data?.fsImage?.path}`
  // console.log('src', src);
  return (
    <>
      <h1 className="h1">{data?.H1 || '--empty--'}</h1>
      <Image width={1200} height={535} priority={true} className="my-4 overflow-hidden rounded-xl" src={src} alt={data?.alt} />
    </>
  )
}

export default HomeFS