import { FunctionComponent } from 'react';
import "./index.css";

interface IProps {
 titre: string,
 lieu: string
}

const LogementIntituleComponent: FunctionComponent<IProps> = ({ titre, lieu }: IProps) => {
 return <div className={`logement-intitule`}>
  <h4 className={`logement-titre`}>{titre}</h4>
  <h5 className={`logement-lieu`}>{lieu}</h5>
 </div>
}

export { LogementIntituleComponent }
