import { FunctionComponent } from 'react';
import "./index.css";

const PiedComponent: FunctionComponent = () => {
 return <div className={`pied`}>

  <div className="kasa-logo"></div>

  <p className={`pied-copy`}>
   © 2020 Kasa. All rights reserved
  </p>
 </div>
}

export { PiedComponent }
