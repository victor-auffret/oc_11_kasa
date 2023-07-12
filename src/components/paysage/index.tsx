import { FunctionComponent } from 'react';
import "./index.css";

interface IProps {
 titre?: string;
 image?: string;
}

const PaysageComponent: FunctionComponent<IProps> = (props: IProps) => {
 return <div className={`paysage paysage-${props.image}`}>
  <div className={`paysage-filtre`}>
   {props?.titre ? <h3 className="paysage-title">{props.titre}</h3> : null}
  </div>

 </div>
}

export { PaysageComponent }
