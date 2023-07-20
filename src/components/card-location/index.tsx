import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logement } from '../../models/logement';

import "./index.css"

interface IProps {
 location: Logement;
}

const CardLocation: FunctionComponent<IProps> = ({ location }: IProps) => {
 const navigate = useNavigate()
 const goLogement = useCallback(() => {
  navigate(`/logement/${location.id}`)
 }, [navigate, location])
 return <div className="card-location">
  <div className="card-gradient" onClick={goLogement}>
   <h4 className={`card-location-titre`}>
    {location?.title ?? "titre de la location"}...
   </h4>
  </div>
 </div>
}

export { CardLocation }
