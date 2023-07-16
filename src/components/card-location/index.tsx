import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logement } from '../../models/logement';

import "./index.css"

interface IProps {
 location: Logement;
}

const CardLocation: FunctionComponent<IProps> = (props: IProps) => {
 const navigate = useNavigate()
 const goLogement = useCallback(() => {
  navigate(`/logement/${props.location.id}`)
 }, [])
 return <div className="card-location">
  <div className="card-gradient" onClick={goLogement}>
   <h4 className={`card-location-titre`}>
    {props.location?.title ?? "titre de la location"}...
   </h4>
  </div>
 </div>
}

export { CardLocation }
