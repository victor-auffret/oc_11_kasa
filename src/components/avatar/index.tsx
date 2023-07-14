import { FunctionComponent } from 'react';
import "./index.css";

interface IProps {
 picture: string,
 name: string
}

const AvatarComponent: FunctionComponent<IProps> = ({ picture, name }: IProps) => {
 return (
  <div className={`avatar-container`}>
   <img src={picture} alt={name} />
  </div>
 )
}

export { AvatarComponent }
