import { FunctionComponent } from 'react';
import "./index.css"

interface IProps {
 titre?: string;
}

const CardLocation: FunctionComponent<IProps> = (props: IProps) => {
 return <div className="card-location">
  <div className="card-gradient">
   <h4>
    {props?.titre ?? "titre de la location"}...
   </h4>
  </div>
 </div>
}

export { CardLocation }
