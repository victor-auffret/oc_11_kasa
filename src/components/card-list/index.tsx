import { Logement } from "../../models/logement"
import { CardLocation } from "../card-location"
import { useLocations } from "../../hooks/useLocations"

import "./index.css"

const CardList = () => {

 const locations: Logement[] = useLocations()

 return (<div className="card-list">
  {
   locations?.map((location) => <CardLocation key={`card-location-${location.id}`} location={location} />)
  }
 </div>)
}

export { CardList }
