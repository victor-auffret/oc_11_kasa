import { FunctionComponent } from 'react';
import { AvatarComponent } from '../avatar';

import "./index.css";

interface IProps {
 name: string,
 picture: string
}

const LogementHostComponent: FunctionComponent<IProps> = ({ name, picture }: IProps) => {
 return <div className={`logement-host`}>
  <p className={`logement-vendeur-nom`}>
   {name.split(' ').map(n => <span key={`k-${n}`}>{n} <br /></span>)}
  </p>
  <AvatarComponent picture={picture} />
 </div>
}

export { LogementHostComponent }