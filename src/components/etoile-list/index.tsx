
import { FunctionComponent } from 'react';
import { EtoileComponent } from '../etoile';

import "./index.css";

interface IProps {
 rate: number
}

const EtoileListComponent: FunctionComponent<IProps> = ({ rate }: IProps) => {
 return (<div className={`etoile-list`}>
  {
   [...Array(5)].map((_, i) => <EtoileComponent key={`star-${rate}-${i}`} vide={i >= rate} />)
  }
 </div>)
}

export { EtoileListComponent }
