import { FunctionComponent } from 'react';

import { Logement } from '../../models/logement';
import { EtoileListComponent } from '../etoile-list';

import "./index.css";
import { TagComponent } from '../tag';

interface IProps {
 logement: Logement
}

const LogementInfosComponent: FunctionComponent<IProps> = ({ logement }: IProps) => {
 return <div className={`logement-infos`}>

  <h4>{logement?.title}</h4>
  <h5>{logement?.location}</h5>
  <p className={`logement-infos-tags`}>
   {logement?.tags?.map((tag, i) => <TagComponent key={`tag-${tag}-${i}`} tag={tag} />)}
  </p>

  <p>{logement?.host?.name}</p>
  <span>{logement?.host?.picture}</span>

  <EtoileListComponent rate={Number(logement?.rating ?? 0)} />

 </div>
}

export { LogementInfosComponent }