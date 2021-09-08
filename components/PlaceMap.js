import { useState, useEffect  } from "react"
import InView from '@/components/InView'

const PlaceMap = props => {

  const [ loaded, setLoaded ] = useState(false)
  useEffect(() => setLoaded(true))

  return(
    loaded && <div className={`overflow-hidden bg-gray-900 mb-4 border-t ${loaded && ("ring-2 ring-bluegray-800")}`}>
      <InView>
        <iframe src={`https://yandex.ru/map-widget/v1/?um=constructor%${props.code}`} width="100%" height="400" frameBorder="0" />
      </InView>
    </div>
  )
}

export default PlaceMap