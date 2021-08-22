import { useState, useEffect  } from "react"

const PlaceMap = props => {

  const [ loaded, setLoaded ] = useState(false)
  useEffect(() => setLoaded(true))

  return(
    loaded && <div className={`overflow-hidden bg-bluegray-700 border rounded ${loaded && ("ring-2 ring-bluegray-800")}`}>
      <iframe src={`https://yandex.ru/map-widget/v1/?um=constructor%${props.code}`} width="100%" height="400" frameBorder="0" />
    </div>
  )
}

export default PlaceMap